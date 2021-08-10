import React from 'react';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
import Header from './components/Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
