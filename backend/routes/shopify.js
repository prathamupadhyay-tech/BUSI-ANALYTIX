import express from 'express';
import { shopifyCount } from '../controller/shopifyController.js';
const shopifyRouter = express.Router();

shopifyRouter.route('/shopifyCount').get(shopifyCount);

export default shopifyRouter;