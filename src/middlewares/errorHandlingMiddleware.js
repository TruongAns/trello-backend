/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import { env } from '~/config/environment';

export const errorHandlingMiddleware = (err, req, res, next) => {
  console.log('errorHandlingMiddleware DTA');

  if (!err.statusCode) err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  const responseError = {
    statusCode: err.statusCode,
    message: err.message,
    stack: err.stack
  };
  if (env.NODE_ENV !== 'dev') {
    delete responseError.stack;
  }

  res.status(responseError.statusCode).json(responseError);
};
