import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='links'>
              <strong>PROSHOP</strong>
            </Link>
          </Navbar.Brand>
          <Nav className='ms-auto'>
            <Nav.Link className='active'>
              <i className='fas fa-home'></i>{' '}
              <Link to='/' className='links'>
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link>
              <i className='fas fa-shopping-cart'></i>{' '}
              <Link to='/cart' className='links'>
                CART
              </Link>
            </Nav.Link>
            <Nav.Link>
              <i className='fas fa-user'></i>{' '}
              <Link to='/login' className='links'>
                SIGN IN
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
