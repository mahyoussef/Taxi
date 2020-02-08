const companyHistoryController = require("../controllers/companyHistory");
const express = require("express");
const router = express.Router();

// Getting all admins
/*.....[Tested Successfully].......*/
router.get("/", companyHistoryController.getAllCompaniesHistory);

// Creating new companyHistory
/*.....[Tested Successfully].......*/
router.post("/", companyHistoryController.createCompanyHistory);

// Updating admin with required ID
/*.....[Tested Successfully].......*/
router.put("/:_id", companyHistoryController.updateCompanyHistory);

// Deleting company with required ID
/*.....[Tested Successfully].......*/
router.delete("/:_id", companyHistoryController.deleteCompanyHistory);

// Getting admin with required ID
/*.....[Tested Successfully].......*/
router.get("/:_id", companyHistoryController.getCompanyHistory);

module.exports = router;
