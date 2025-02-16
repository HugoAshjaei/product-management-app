const id = require("./fields/id.js");
const Joi = require("joi");

const validator = Joi.object({
  params: Joi.object({
    ...id,
  }),
  body: Joi.object({}),
  query: Joi.object({}),
});

module.exports = validator;
