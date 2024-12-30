/**

 */
import { boardRouters } from './boardRoutes';
import { StatusCodes } from 'http-status-codes';

const express = require('express');
const Router = express.Router();

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs ready to use' });
});
Router.use('/boards', boardRouters);

export const APIs_V1 = Router;
