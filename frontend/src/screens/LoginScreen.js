import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

function LoginScreen({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const inputRef = useRef();
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1 className="text-right">ورود</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <h6 className="text-right">آدرس ایمیل</h6>
          <Form.Control
            type="email"
            placeholder="ایمیل را وارد کنید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={inputRef}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <h6 className="text-right">کلمه عبور</h6>
          <Form.Control
            type="password"
            placeholder="رمز عبور را وارد کنید"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          ورود
        </Button>
      </Form>

      <Row className="py-3">
        <Col className="text-right">
          کاربر جدید هستید؟{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/ثبت نام"}>
            ثبت نام
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
