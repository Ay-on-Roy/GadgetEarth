import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../products";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
} from "react-bootstrap";
import Rating from "../Rating";
import axios from 'axios';

function ProductScreen() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchProduct();
  }, [id]);
  // const { id } = useParams();
  // const product = products.find((product) => product._id === id);
  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  return (
    <div>
      <Row>
        <Col md={6}>
          <Image
            src={product.image}
            alt={product.name}
            style={{ width: "80%", height: "auto" }}
          />
          <center>{product.name}</center>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"f8e825"}
              />
            </ListGroup.Item>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>

            <ListGroupItem>Description : ${product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price : </Col>
                  <Col>
                    <strong>$ {product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status : </Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Button
                  className="btn-block"
                  disabled={product.countInStock === 0}
                  type="button"
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <center>
        <Link to="/" className="btn btn-dark my-3">
          {" "}
          Go Back{" "}
        </Link>
      </center>
    </div>
  );
}

export default ProductScreen;
