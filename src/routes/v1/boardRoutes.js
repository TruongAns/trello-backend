const express = require('express');
const Router = express.Router();

import { StatusCodes } from 'http-status-codes';

Router.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'GET board sucesss'
  });
});

Router.post('/', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'POST board sucesss'
  });
});

export const boardRouters = Router;
