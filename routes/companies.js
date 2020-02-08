const companyController = require("../controllers/company");
const express = require("express");
const router = express.Router();

// Getting all companies
/*.....[Tested Successfully].......*/
router.get("/", companyController.getAllCompanies);

// Creating new company
/*.....[Tested Successfully].......*/
router.post("/", companyController.createCompany);

// Updating company with required ID
/*.....[Tested Successfully].......*/
router.put("/:_id", companyController.updateCompany);

// Deleting company with required ID
/*.....[Tested Successfully].......*/
router.delete("/:_id", companyController.deleteCompany);

// Getting company with required ID
/*.....[Tested Successfully].......*/
router.get("/:_id", companyController.getCompany);

module.exports = router;
