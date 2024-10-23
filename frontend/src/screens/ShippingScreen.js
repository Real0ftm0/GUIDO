import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import NotFound from "../NotFound";
import { saveShippingAddress } from "../actions/cartActions";

function ShippingScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  // const [address, setAddress] = useState(shippingAddress.address);
  // const [city, setCity] = useState(shippingAddress.city);
  // const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  // const [country, setCountry] = useState(shippingAddress.country);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <FormContainer>
      <div style={{textAlign: "start"}}> 
        <h1>اطلاعات ارسال</h1>
      </div>
      <Form onSubmit={submitHandler} style={{textAlign: "start"}}>
        <Form.Group controlId="address">
          <Form.Label>آدرس</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="آدرس را وارد کنید"
            value={address ? address : ""}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="province">
          <Form.Label>استان</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="استان را وارد کنید"
            value={city ? city : ""}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>شهر</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="شهر را وارد کنید"
            value={country ? country : ""}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>کد پستی</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="کد پستی را وارد کنید"
            value={postalCode ? postalCode : ""}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <div style={{textAlign: "end"}}>
          <Button type="submit" variant="primary">
            ادامه
            {/* <NotFound /> */}
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}

export default ShippingScreen;
