import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productsRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const app = express();

// @desc    -   Access .env file configurations
dotenv.config();

// @desc    -   Call database connection function
connectDB();

// @desc -  Homepage Route
app.get('/', (req, res) => {
  res.send('Home');
  res.end();
});
// @desc -  Products Route
app.use('/api/products', productRoutes);

// @desc -  404 Not Found Error Handler Middleware
app.use(notFound);

// @desc -  Custom Error Handler Middleware
app.use(errorHandler);

// @desc -  Application access port
const PORT = process.env.PORT || 5000;

// @desc -  Application listening port
app.listen(PORT);
