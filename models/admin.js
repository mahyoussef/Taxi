const Joi = require("joi");
const mongoose = require("mongoose");

const Admin = mongoose.model(
  "Admin",
  new mongoose.Schema({
    username: { type: String, required: true, minlength: 5, maxlength: 255 },
    password: { type: String, required: true, minlength: 9, maxlength: 255 },
    email: { type: String, required: true, minlength: 15, maxlength: 255 },
    address: { country: String, city: String, street: String },
    dateOfBirth: Date,
    phone: { type: String, required: true, min: 12, max: 15 },
    image: String
  })
);

function validateAdmin(admin) {
  const schema = {
    username: Joi.String()
      .min(5)
      .max(255)
      .required(),
    password: Joi.String()
      .min(10)
      .max(255)
      .required(),
    email: Joi.String().email(),
    address: Joi.String(),
    dateOfBirth: Joi.Date(),
    phone: Joi.String()
      .min(12)
      .max(15)
      .required(),
    image: Joi.String()
  };
  return Joi.validate(admin, schema);
}

exports.Admin = Admin;
exports.validate = validateAdmin;
