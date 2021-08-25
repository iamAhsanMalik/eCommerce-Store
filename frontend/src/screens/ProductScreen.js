import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailProduct } from '../redux/actions/productActions';

import { Card, Button, ListGroup, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ history, match }) => {
  const [productQty, setProductQty] = useState(1);

  const productQtyHandler = (e) => {
    setProductQty(e.target.value);
  };

  const addToCartHandler = (id) => {
    history.push(`/cart/${match.params.id}?productQty=${productQty}`);
  };

  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { product, error, loading } = productDetail;
  useEffect(() => {
    dispatch(detailProduct(match.params.id));
  }, [match, dispatch]);

  return (
    <section className='body-section'>
      <Link type='button' className='my-3 btn btn-light' to='/'>
        Click Me
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row className='my-5'>
          <Col md={5}>
            <Card>
              <Card.Img src={product.productImage} alt={product.productName} />
            </Card>
          </Col>

          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h4>{product.productName}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>
                  <Rating
                    starRating={product.productRating}
                    avgRating={`${product.numReviews} Reviews`}
                  />
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>{`Price: $${product.productPrice}`}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{`Description: ${product.productDescription}`}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>{`$${product.productPrice}`}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.productInStock ? 'In Stock' : 'Out of Stock'}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.productInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty:</Col>
                      <Col>
                        <Form.Select
                          value={productQty}
                          onChange={productQtyHandler}
                        >
                          {[...Array(product.productInStock).keys()].map(
                            (x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            )
                          )}
                        </Form.Select>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='btn btn-dark'
                    type='button'
                    disabled={!product.productInStock}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </section>
  );
};

export default ProductScreen;
