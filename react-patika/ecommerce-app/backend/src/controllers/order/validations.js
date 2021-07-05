import Joi from 'joi';

const OrderSchema = Joi.object({
  address: Joi.string().required(),
  items: Joi.array().items(Joi.string()).required(),
});

export default OrderSchema;
