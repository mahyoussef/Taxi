const carController = require("../controllers/car");
const express = require("express");
const router = express.Router();

// Getting all companies
/*.....[Tested Successfully].......*/
router.get("/", carController.getAllCars);

// Creating new company
/*.....[Tested Successfully].......*/
router.post("/", carController.createCar);

// Updating company with required ID
/*.....[Tested Successfully].......*/
router.put("/:_id", carController.updateCar);

// Deleting company with required ID
/*.....[Tested Successfully].......*/
router.delete("/:_id", carController.deleteCar);

// Getting company with required ID
/*.....[Tested Successfully].......*/
router.get("/:_id", carController.getCar);

module.exports = router;
