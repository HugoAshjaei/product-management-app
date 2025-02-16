const Joi = require("joi");

module.exports = {
  name: Joi.string().required().max(64).min(1),
  description: Joi.string().allow(""),
  images: Joi.array().items(Joi.string()).default([]),
  price: Joi.number().required().default(0),
  colours: Joi.array().items(Joi.string()).min(1),
  productType: Joi.string().required(),
};
