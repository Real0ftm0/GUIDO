import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        placeholder="جست و جو کنید"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
        style={{ borderRadius: "1rem" }}
      ></Form.Control>

      <Button
        type="submit"
        variant="outline-success"
        className="header__btn p-2"
        style={{ borderRadius: "1vh" }}
      >
        <i class="fas fa-search"></i>
      </Button>
    </Form>
  );
}

export default SearchBox;
