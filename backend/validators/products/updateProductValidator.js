const id = require("./fields/id.js");
const details = require("./fields/details.js");
const Joi = require("joi");

const validator = Joi.object({
  params: Joi.object({
    ...id,
  }),
  body: Joi.object({
    ...details,
  }),
  query: Joi.object({}),
});

module.exports = validator;
