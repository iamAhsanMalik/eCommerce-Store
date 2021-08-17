import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import users from './data/users.js'; // Users Data
import products from './data/products.js'; // Products Data
import UserModel from './models/userModel.js';
import ProductModel from './models/productModel.js';
import OrderModel from './models/orderModel.js';

// @desc    -   Access .env file configurations
dotenv.config();

// @desc    -   Call database connection function
connectDB();

// @desc    -   Database data import function
const importData = async () => {
  try {
    await UserModel.deleteMany();
    await ProductModel.deleteMany();
    await OrderModel.deleteMany();

    const createdUsers = await UserModel.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await ProductModel.insertMany(sampleProducts);

    console.log('Done! Data Imported.....');
    process.exit();
  } catch (error) {
    console.error(`Failed! Data Imported.... ${error.message}`);
    process.exit(1);
  }
};

// @desc    -   Database data destroy function
const destroyData = async () => {
  try {
    await UserModel.deleteMany();
    await ProductModel.deleteMany();
    await OrderModel.deleteMany();

    console.log('Done! Data Destroyed.....');
    process.exit();
  } catch (error) {
    console.error(`Failed! Data Destroyed.... ${error.message}`);
    process.exit(1);
  }
};

// @desc  -   process.argv use to get terminal cammands
process.argv[2] === '-d' ? destroyData() : importData();
