import express from 'express';
import products from './data/products.js';
const server = express();

server.get('/', (req, res) => {
  res.send('Home');
  res.end();
});

server.get('/api/products', (req, res) => {
  res.json(products);
  res.end();
});

server.get('/api/product/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.send(product);
});

server.listen(5000, console.log('Api is running'));
