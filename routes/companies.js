const companyController = require("../controllers/company");
const express = require("express");
const router = express.Router();

// Getting all companies
router.get("/", companyController.getAllCompanies);

// Creating new company
router.post("/", companyController.createCompany);

// Updating company with required ID
router.put("/:id", companyController.updateCompany);

// Deleting company with required ID
router.delete("/:id", companyController.deleteCompany);

// Getting company with required ID
router.get("/:id", companyController.getCompany);

module.exports = router;
