const companyHistoryController = require("../controllers/companyHistory");
const express = require("express");
const router = express.Router();

// Getting all admins
router.get("/", companyHistoryController.getAllCompaniesHistory);

// Creating new companyHistory
router.post("/", companyHistoryController.createCompanyHistory);

// Updating admin with required ID
router.put("/:id", companyHistoryController.updateCompanyHistory);

// Deleting company with required ID
router.delete("/:id", companyHistoryController.deleteCompanyHistory);

// Getting admin with required ID
router.get("/:id", companyHistoryController.getCompanyHistory);

module.exports = router;
