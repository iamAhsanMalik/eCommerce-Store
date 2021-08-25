import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  ListGroupItem,
  Card,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = ({ match, location, history }) => {
  const dispatch = useDispatch();

  const productId = match.params.id;
  const productQty = location.search
    ? Number(location.search.split('=')[1])
    : 1;
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push(`/login?redirect=shipping`);
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, productQty));
    }
  }, [dispatch, productId, productQty]);
  return (
    <section className='body-section'>
      <Row>
        <h1 className='my-4'>Shopping Cart</h1>
        <Col md={8} className='mb-4'>
          {cartItems.length === 0 ? (
            <Message variant='info'>
              Your cart is empty! <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroupItem key={item.product}>
                  <Row>
                    <Col md={3}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price}</Col>
                    <Col md={2}>
                      <Form.Select
                        value={item.productQty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.productInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='white'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <h3>
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + item.productQty, 0)})
                  items
                </h3>
                $
                {cartItems
                  .reduce(
                    (acc, item) => (acc = acc + item.productQty * item.price),
                    0
                  )
                  .toFixed(2)}
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type='button'
                  className='btn btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Checkout
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default CartScreen;
