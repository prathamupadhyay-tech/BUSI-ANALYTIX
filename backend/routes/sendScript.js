import express from 'express';
import { scriptSender } from '../controller/sendScriptController.js';
const sendScriptRouter = express.Router();

sendScriptRouter.route('/sendScript').get(scriptSender);

export default sendScriptRouter;