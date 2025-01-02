const express = require('express');
const Router = express.Router();

import { StatusCodes } from 'http-status-codes';
import { boardController } from '~/controllers/boardController';
import { boardValidation } from '~/validations/boardValidation';

Router.get('/', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'GET board sucesss'
  });
});

Router.post('/', boardValidation.createNew, boardController.createNew);

export const boardRouters = Router;
