import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <div style={{minHeight: "20rem"}}>
        <Link to={`/product/${product._id}`}>
          <div style={{width: "225px", height: "181px"}}>
            <Card.Img src={product.image} style={{width: "225px", height: "225px"}}/>
          </div>
        </Link>
        
        <div className="text-center" style={{marginTop: "4rem"}}>
          <Card.Body as="div">
            <Link to={`/product/${product._id}`}>
              <Card.Title>
                <h5>{product.name}</h5>
              </Card.Title>
            </Link>
          
            <Card.Text>
              <div style={{marginTop: "2rem"}}>
                <Rating
                  value={product.rating}
                  text={` بررسی ها`}
                  color={"#f8e825"}
                />
              </div>
            </Card.Text>
          
            <Card.Text as="h3">{product.price} ریال</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default Product;
