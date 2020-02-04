const { CompanyHistory, validate } = require("../models/companyHistory");

// Getting all companies
exports.getAllCompaniesHistory = async (req, res, next) => {
  CompanyHistory.find()
    .populate({
      path: "CompanyID",
      select: "name -_id"
    })
    .exec(function(err, companyHistory) {
      if (!err) res.send(companyHistory);
    });
};

// Creating new company
exports.createCompanyHistory = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let companyHistory = new CompanyHistory({
    companyId: req.body.companyId,
    startingDate: req.body.startingDate,
    endingDate: req.body.endingDate,
    offerId: req.body.offerId,
    feedback: req.body.feedback,
    moneyIncome: req.body.moneyIncome
  });
  companyHistory = await companyHistory.save();

  res.send(companyHistory);
};

// Updating company with required ID
exports.updateCompanyHistory = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const companyHistory = await CompanyHistory.findByIdAndUpdate(
    req.body._id,
    {
      startingDate: req.body.startingDate,
      endingDate: req.body.endingDate,
      offerId: req.body.offerId,
      feedback: req.body.feedback,
      moneyIncome: req.body.moneyIncome
    },
    { new: true }
  );

  if (!companyHistory)
    return res.status(404).send("The company with the given ID was not found.");

  res.send(companyHistory);
};

// Deleting company with required ID
exports.deleteCompanyHistory = async (req, res, next) => {
  const companyHistory = await CompanyHistory.findByIdAndRemove(req.body._id);

  if (!companyHistory)
    return res.status(404).send("The company with the given ID was not found.");

  res.send(companyHistory);
};

// Getting company with required ID
exports.getCompanyHistory = async (req, res, next) => {
  const companyHistory = await CompanyHistory.findById(req.params._id);

  if (!companyHistory)
    return res.status(404).send("The admin with the given ID was not found.");

  res.send(companyHistory);
};
