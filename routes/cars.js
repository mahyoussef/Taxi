const carController = require("../controllers/car");
const express = require("express");
const router = express.Router();

// Getting all companies
router.get("/", carController.getAllCars);

// Creating new company
router.post("/", carController.createCar);

// Updating company with required ID
router.put("/:id", carController.updateCar);

// Deleting company with required ID
router.delete("/:id", carController.deleteCar);

// Getting company with required ID
router.get("/:id", carController.getCar);

module.exports = router;
