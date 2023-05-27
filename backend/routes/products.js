import express from "express";
import { addProduct } from "../controller/products.js";
import { getProducts } from "../controller/products.js";
import { deleteProduct } from "../controller/products.js";
const productRouter = express.Router();
productRouter.get("/user/product/:shopId", getProducts);
productRouter.delete("/user/product/:productId", deleteProduct);
productRouter.post("/user/product/:shopId/add", addProduct);
export default productRouter;