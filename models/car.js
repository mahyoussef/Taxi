const Joi = require("joi");
const mongoose = require("mongoose");

const Car = mongoose.model(
  "Car",
  new mongoose.Schema({
    model: { type: String, minlength: 3, required: true },
    type: { type: String, minlength: 3, required: true },
    color: { type: String, required: true },
    isDisabled: { type: Boolean, required: true },
    isAccessed: { type: Boolean, required: true },
    userId: {
      type: mongoose.Types.ObjectId(),
      required: function() {
        return this.isAccessed;
      }
    },
    currentLocation: {
      longitude: { type: String, required: true },
      latitude: { type: String, required: true }
    }
  })
);

function validateCar(car) {
  const schema = {
    model: Joi.String()
      .min(3)
      .required(),
    type: Joi.String()
      .min(3)
      .required(),
    color: Joi.String().required(),
    isDisabled: Joi.Boolean().required(),
    isAccessed: Joi.Boolean().required(),
    userId: Joi.String(),
    currentLocation: Joi.object({
      longitude: Joi.String().required(),
      latitude: Joi.String().required()
    })
  };

  return Joi.validate(car, schema);
}

exports.Car = Car;
exports.validate = validateCar;
