import express from 'express';
import { imageController } from '../controller/thresholdController.js';
const imgRouter = express.Router();

imgRouter.route('/thresholdimg').get(imageController);

export default imgRouter;