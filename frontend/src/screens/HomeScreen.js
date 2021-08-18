import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, products, error } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section className='body-section'>
      <h1 className='my-5 text-center'>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row as='div'>
          {products.map((product) => (
            <Col
              key={product._id}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              className='mb-4'
            >
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default HomeScreen;
