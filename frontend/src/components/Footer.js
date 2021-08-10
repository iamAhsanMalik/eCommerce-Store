import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className='py-3 bg-dark text-white text-center'>
            <Link to='/' className='links'>
              <strong>ProShop</strong>
            </Link>{' '}
            &copy; Copyright {new Date().getFullYear()} | All Right Reserverd
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
