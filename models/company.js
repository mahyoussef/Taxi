const Joi = require("joi");
const mongoose = require("mongoose");

const Company = mongoose.model(
  "Company",
  new mongoose.Schema({
    name: {
      type: String,
      minlength: 5,
      required: true
    },
    numberOfEmployees: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
      minlength: 15,
      maxlength: 255
    },
    phone: {
      type: String,
      required: true,
      min: 12,
      max: 15
    },
    address: {
      country: { type: String, required: true },
      city: { type: String, required: true },
      street: { type: String, required: true }
    }
  })
);

function validateCompany(company) {
  const schema = {
    name: Joi.String()
      .min(5)
      .required(),
    numberOfEmployees: Joi.Number().required(),
    email: Joi.String().email(),
    phone: Joi.String()
      .min(12)
      .max(15)
      .required(),
    address: Joi.object({
      country: Joi.String().required(),
      city: Joi.String().required(),
      street: Joi.String().required()
    })
  };
  return Joi.validate(company, schema);
}

exports.Company = Company;
exports.validate = validateCompany;
