import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

function PaymentScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const imageRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    imageRef.current.scrollIntoView();
  });

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  if (!shippingAddress.address) {
    history.push("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    // <FormContainer>
    //   <CheckoutSteps step1 step2 step3 />

    //   {/* <Form onSubmit={submitHandler}>
    //     <Form.Group>
    //       <Form.Label as="legend">Select Method</Form.Label>
    //       <Col>
    //         <Form.Check
    //           type="radio"
    //           label="PayPal or Credit Card"
    //           id="paypal"
    //           name="paymentMethod"
    //           checked
    //           onChange={(e) => setPaymentMethod(e.target.value)}
    //         ></Form.Check>
    //       </Col>
    //     </Form.Group>

    //     <Button type="submit" variant="primary">
    //       Continue
    //     </Button>
    //   </Form> */}
    // </FormContainer>
    <div className="w-100 text-center">
      <img
        src="./images/404.svg"
        alt="404image"
        ref={imageRef}
        style={{ height: "600px" }}
        className="mx-auto"
      />
      <h2 className="my-4">صفحه مورد نظر یافت نشد!</h2>
    </div>
  );
}

export default PaymentScreen;
