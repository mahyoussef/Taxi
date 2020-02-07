const { Company, validate } = require("../models/company");

// Getting all companies
exports.getAllCompanies = async (req, res, next) => {
  const companies = await Company.find().sort("name");
  res.send(companies);
};

// Creating new company
exports.createCompany = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let company = new Company({
    name: req.body.name,
    numberOfEmployees: req.body.numberOfEmployees,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  });
  company = await company.save();

  res.send(company);
};

// Updating company with required ID
exports.updateCompany = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const company = await Company.findByIdAndUpdate(
    req.body._id,
    {
      name: req.body.name,
      numberOfEmployees: req.body.numberOfEmployees,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address
    },
    { new: true }
  );

  if (!company)
    return res.status(404).send("The company with the given ID was not found.");

  res.send(company);
};

// Deleting company with required ID
exports.deleteCompany = async (req, res, next) => {
  const company = await Company.findByIdAndRemove(req.body._id);

  if (!company)
    return res.status(404).send("The company with the given ID was not found.");

  res.send(company);
};

// Getting company with required ID
exports.getCompany = async (req, res, next) => {
  const company = await Company.findById(req.params._id);

  if (!company)
    return res.status(404).send("The company with the given ID was not found.");

  res.send(company);
};
