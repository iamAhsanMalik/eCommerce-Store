import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/${match.params.id}`);
      setProduct(data);
    };
    return fetchProduct();
  }, [match.params.id]);

  return (
    <section className='body-section'>
      <Link type='button' className='my-3 btn btn-light' to='/'>
        Click Me
      </Link>

      <Row className='my-5'>
        <Col md={5}>
          <Card>
            <Card.Img src={product.image} alt={product.name} />
          </Card>
        </Col>

        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>
                <Rating
                  starRating={product.rating}
                  avgRating={`${product.numReviews} Reviews`}
                />
              </h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>{`Price: ${product.price}`}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>{`Description: ${product.description}`}</p>
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
                    <strong>{`$${product.price}`}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock ? 'In Stock' : 'Out of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn btn-dark'
                  type='button'
                  disabled={!product.countInStock}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default ProductScreen;
