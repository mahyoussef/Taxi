const adminController = require("../controllers/admin");

const express = require("express");
const router = express.Router();

// Getting all admins
/*.....[Tested Successfully].......*/
router.get("/", adminController.getAllAdmins);

// Updating admin with required ID
/*.....[Tested Successfully].......*/
router.put("/:_id", adminController.updateAdmin);

/*
// Deleting admin with required ID
*/

// Getting admin with required ID
/*.....[Tested Successfully].......*/
router.get("/:_id", adminController.getAdmin);

module.exports = router;
