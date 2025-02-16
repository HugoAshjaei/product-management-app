const id = require("./fields/id.js");
const details = require("./fields/details.js");
const Joi = require("joi");

const validator = Joi.object({
  body: Joi.object({
    ...details,
    ...id,
  }),
  params: Joi.object({}),
  query: Joi.object({}),
});

module.exports = validator;
