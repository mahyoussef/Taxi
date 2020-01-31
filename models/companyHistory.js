const Joi = require("joi");
const mongoose = require("mongoose");

const CompanyHistory = mongoose.model(
  "CompanyHistory",
  new mongoose.Schema({
    companyId: {
      type: mongoose.Types.ObjectId(),
      required: true
    },
    startingDate: {
      type: Date,
      required: true
    },
    endingDate: {
      type: Date,
      required: true
    },
    offerId: {
      type: mongoose.Types.ObjectId(),
      required: true
    },
    feedback: {
      adminId: {
        type: mongoose.Types.ObjectId(),
        required: true
      },
      body: {
        type: String
      }
    },
    moneyIncome: {
      type: Number,
      required: true
    }
  })
);

function validateCompanyHistory(companyHistory) {
  const schema = {
    companyId: Joi.String().required(),
    startingDate: Joi.Date().required(),
    endingDate: Joi.Date().required(),
    offerId: Joi.String().required(),
    feedback: Joi.object({
      adminId: Joi.String().required(),
      body: Joi.String()
        .min(10)
        .max(255)
        .required()
    }),
    moneyIncome: Joi.Number().required()
  };
  return Joi.validate(companyHistory, schema);
}

exports.CompanyHistory = CompanyHistory;
exports.validate = validateCompanyHistory;
