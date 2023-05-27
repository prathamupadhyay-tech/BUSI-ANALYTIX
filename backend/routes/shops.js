import express  from "express";
import { allShops } from "../controller/shops.js";
import { addShop } from "../controller/shops.js";
import { deleteShop } from "../controller/shops.js";
const shopRouter = express.Router();
shopRouter.post("/user/shop", allShops);
shopRouter.post("/user/shop/add" , addShop);
shopRouter.delete("/user/shop/:shopId" ,deleteShop );
export default shopRouter;
