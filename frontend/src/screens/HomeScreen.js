import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';
const HomeScreen = () => {
  return (
    <section className='body-section'>
      <h1 className='my-5 text-center'>Latest Products</h1>
      <Row as='div'>
        {products.map((product) => (
          <Col key={product._id} xs={12} sm={6} md={6} lg={4} className='mb-4'>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default HomeScreen;
