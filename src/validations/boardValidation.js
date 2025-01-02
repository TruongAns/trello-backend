import ApiError from '~/utils/ApiError';

const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required().min(3).max(256).trim().strict(),
  description: Joi.string().required().min(3).max(256).trim().strict()
});

const createNew = async (req, res, next) => {
  const body = req.body;
  console.log('🚀 ~ createNew ~ body:', body);

  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const newError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, error.message);
    next(newError);
  }
};

export const boardValidation = {
  createNew
};
