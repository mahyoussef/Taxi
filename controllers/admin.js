const { Admin, validate } = require("../models/admin");

// Getting all admins
exports.getAllAdmins = async (req, res, next) => {
  const admins = await Admin.find().sort("username");
  res.send(admins);
};

/*
// Creating new admin
*/

// Updating admin with required ID
exports.updateAdmin = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const admin = await Admin.findByIdAndUpdate(
    req.body._id,
    {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth,
      phone: req.body.phone,
      address: req.body.address,
      image: req.body.image
    },
    { new: true }
  );

  if (!admin)
    return res.status(404).send("The admin with the given ID was not found.");

  res.send(admin);
};

/*
// Deleting admin with required ID
*/

exports.getAdmin = async (req, res, next) => {
  const admin = await Admin.findById(req.params._id);

  if (!admin)
    return res.status(404).send("The admin with the given ID was not found.");

  res.send(admin);
};
