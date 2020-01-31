const Joi = require("joi");
const mongoose = require("mongoose");

const Issue = mongoose.model(
  "Issue",
  new mongoose.Schema({
    userId: {
      type: mongoose.Types.ObjectId(),
      required: true
    },
    label: {
      type: String,
      enum: ["Red", "Yellow", "Green", "Gray"],
      required: true
    },
    title: {
      type: String,
      minlength: 5,
      maxlength: 255,
      required: true
    },
    replies: {
      adminId: {
        type: mongoose.Types.ObjectId(),
        required: true
      },
      body: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 255
      }
    }
  })
);

function validateIssue(issue) {
  const schema = {
    label: Joi.String().required(),
    title: Joi.String()
      .min(5)
      .max(255)
      .required(),
    replies: Joi.object({
      adminId: Joi.String().required(),
      body: Joi.String()
        .min(10)
        .max(255)
        .required()
    })
  };
  return Joi.validate(issue, schema);
}

exports.Issue = Issue;
exports.validate = validateIssue;
