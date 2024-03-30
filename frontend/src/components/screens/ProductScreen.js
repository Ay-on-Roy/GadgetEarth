import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
  Form
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productAction";
import Message from "../Message";
import Rating from "../Rating";
import Loader from "../Loader";
import { productDetailsReducers } from "../../reducers/productReducers"

function ProductScreen() {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    window.location.href = `/cart/${id}?qty=${qty}`;
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
              <ListGroupItem>
                Description : ${product.description}
              </ListGroupItem>
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
                      {product.count_in_stock > 0
                        ? "In Stock"
                        : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroupItem>

            {product.count_in_stock >0 && (
              <ListGroup.Item>

                 <Row>

                  <Col>Qty</Col>
                  <Col xs="auto" className="my-1">
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.count_in_stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                </Row>
                </ListGroup.Item>
                )}
                <ListGroupItem>
                  <Button
                    className="btn-block"
                    disabled={product.count_in_stock === 0}
                    type="button"
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}

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
