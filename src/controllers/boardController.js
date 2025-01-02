import { StatusCodes } from 'http-status-codes';
import ApiError from '~/utils/ApiError';

const createNew = (req, res, next) => {
  try {
    // call service

    // if success
    // res.status(StatusCodes.OK).json({
    //   message: 'POST board sucesss from boardControler'
    // });
    throw new Error('error from controler');
  } catch (error) {
    next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message));
  }
};

export const boardController = {
  createNew
};
