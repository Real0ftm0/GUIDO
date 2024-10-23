import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import NotFound from "../NotFound";

function CheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/NotFound">
            <Nav.Link>NotFound</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>NotFound</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/NotFound">
            <Nav.Link>NotFound</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>NotFound</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/NotFound">
            <Nav.Link>Place NotFound</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>NotFound</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default CheckoutSteps;
