const Joi = require("joi");

const validator = Joi.object({
  query: Joi.object({
    page: Joi.number().default(1),
    limit: Joi.number().default(10),
    name: Joi.string().allow(""),
    colourId: Joi.string().optional(),
    productTypeId: Joi.string().optional(),
  }),
  params: Joi.object({}),
  body: Joi.object({}),
});

module.exports = validator;
