import * as dotenv from 'dotenv';
import pg from 'pg';
import { getProductById as getProductByIdHandler } from './src/getProductById.js';
import { getAllProducts as getAllProductsHandler } from './src/getAllProducts.js';
import { createProduct as createProductHandler } from './src/createProduct.js';
import { deleteProductById as deleteProductByIdHandler } from './src/deleteProductById.js';
import { catalogBatchProcess as catalogBatchProcessHandler } from './src/catalogBatchProcess.js';
import { DatabaseService } from './src/utils/db.js'
dotenv.config();

const dbClient = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_SECRET,
  port: 5432
});
dbClient.connect();
const productService = new DatabaseService(dbClient)

const getProductById = getProductByIdHandler(productService);
const getAllProducts = getAllProductsHandler(productService);
const createProduct = createProductHandler(productService);
const deleteProductById = deleteProductByIdHandler(productService);
const catalogBatchProcess = catalogBatchProcessHandler(productService);

export { getProductById, getAllProducts, createProduct, catalogBatchProcess, deleteProductById };