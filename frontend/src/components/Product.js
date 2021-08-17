import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <>
      <Card className='p-3 rounded h-100'>
        <Link to={`/api/products/${product._id}`}>
          <Card.Img src={product.productImage} />
        </Link>
        <Card.Body>
          <Card.Text>
            <Rating
              starRating={product.productRating}
              avgRating={`${product.numReviews} Reviews`}
            />
          </Card.Text>
          <Card.Text as='h4'>
            <strong>{`$${product.productPrice}`}</strong>
          </Card.Text>
          <Link
            to={`/api/products/${product._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Card.Title as='div'>
              <strong>{product.productName}</strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
