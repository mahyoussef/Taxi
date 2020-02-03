const adminController = require("../controllers/admin");
const express = require("express");
const router = express.Router();

// Getting all admins
router.get("/", adminController.getAllAdmins);

/*
    This functions creates a new admin 
*/

// Updating admin with required ID
router.put("/:id", adminController.updateAdmin);

/*
// Deleting admin with required ID
*/

// Getting admin with required ID
router.get("/:id", adminController.getAdmin);

module.exports = router;
