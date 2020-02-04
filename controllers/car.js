const { Car, validate } = require("../models/car");

// Getting all companies
exports.getAllCars = async (req, res, next) => {
  const cars = await Car.find().sort("type");
  res.send(cars);
};

// Creating new company
exports.createCar = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let car = new Company({
    model: req.body.model,
    type: req.body.type,
    color: req.body.color,
    isDisabled: req.body.isDisabled,
    isAccessed: req.body.isAccessed,
    currentLocation: req.body.currentLocation
  });
  car = await car.save();

  res.send(car);
};

// Updating company with required ID
exports.updateCar = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const car = await Car.findByIdAndUpdate(
    req.body._id,
    {
      model: req.body.model,
      type: req.body.type,
      color: req.body.color,
      isDisabled: req.body.isDisabled,
      isAccessed: req.body.isAccessed,
      currentLocation: req.body.currentLocation
    },
    { new: true }
  );

  if (!car)
    return res.status(404).send("The company with the given ID was not found.");

  res.send(car);
};

// Deleting company with required ID
exports.deleteCar = async (req, res, next) => {
  const car = await Car.findByIdAndRemove(req.body._id);

  if (!car)
    return res.status(404).send("The company with the given ID was not found.");

  res.send(car);
};

// Getting company with required ID
exports.getCar = async (req, res, next) => {
  const car = await Car.findById(req.params._id);

  if (!car)
    return res.status(404).send("The admin with the given ID was not found.");

  res.send(car);
};
