import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <strong>PROSHOP</strong>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className='ms-auto'>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className='fas fa-home'></i> HOME
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i> CART
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i> SIGN IN
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
