import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators';
const Joi = require('joi');

const CARD_COLLECTION_NAME = 'cards';

const CARD_COLLECTION_SCHEMA = Joi.object({
  boardId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  columnId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),

  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().optional(),

  createAt: Joi.date().timestamp('javascript').default(Date.now),
  updateAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
});

export const cardModel = {
  CARD_COLLECTION_NAME,
  CARD_COLLECTION_SCHEMA
};
