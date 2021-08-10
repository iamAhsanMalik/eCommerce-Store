import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <>
      <Card className='p-3 rounded h-100'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </Link>
        <Card.Body>
          <Card.Text>
            <Rating
              starRating={product.rating}
              avgRating={`${product.numReviews} Reviews`}
            />
          </Card.Text>
          <Card.Text as='h4'>
            <strong>{`$${product.price}`}</strong>
          </Card.Text>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
