import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";

function RegisterScreen({ location, history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <div style={{ textAlign: "right" }}>
        <h1 style={{ direction: "rtl" }}>ثبت نام</h1>
      </div>

      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" style={{ textAlign: "right" }}>
          <Form.Label style={{ direction: "rtl" }}>نام</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="نام خود را وارد کنید"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ direction: "rtl" }}
          />
        </Form.Group>

        <Form.Group controlId="email" style={{ textAlign: "right" }}>
          <Form.Label style={{ direction: "rtl" }}>ایمیل</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="ایمیل را وارد کنید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" style={{ textAlign: "right" }}>
          <Form.Label style={{ direction: "rtl" }}>رمز ورود</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="رمز خود را وارد کنید"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="passwordConfirm" style={{ textAlign: "right" }}>
          <Form.Label style={{ direction: "rtl" }}>تایید رمز ورود</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="تایید رمز ورود"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ direction: "rtl" }}
          />
        </Form.Group>

        <div style={{ textAlign: "right" }}>
          <Button type="submit" variant="primary" style={{ direction: "rtl" }}>
            ثبت نام
          </Button>
        </div>
      </Form>

      <Row className="py-3">
        <Col style={{ textAlign: "right" }}>
          <h6 style={{ direction: "rtl" }}>در حال حاضر حساب دارید؟</h6>{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            <h6 style={{ direction: "rtl" }}>وارد حسابتان شوید</h6>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default RegisterScreen;
