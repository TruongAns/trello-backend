import { StatusCodes } from 'http-status-codes';
import { boardService } from '~/services/boardService';

import ApiError from '~/utils/ApiError';

const createNew = async (req, res, next) => {
  try {
    const newBoard = await boardService.createNew(req.body);

    res.status(StatusCodes.CREATED).json(newBoard);
  } catch (error) {
    next(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message));
  }
};

export const boardController = {
  createNew
};
