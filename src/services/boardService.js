import { boardModel } from '~/models/boardModel';
import slugify from '~/utils/formatter';

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    };
    const createdBoard = await boardModel.createNew(newBoard);
    const result = await boardModel.findOneById(createdBoard.insertedId);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const boardService = { createNew };
