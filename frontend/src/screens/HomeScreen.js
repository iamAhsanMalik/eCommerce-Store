import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);
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
