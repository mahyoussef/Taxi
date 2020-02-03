const issueController = require("../controllers/issue");
const express = require("express");
const router = express.Router();

// Getting all issues
router.get("/", issueController.getAllIssues);

/*
// This function does POST request for creating an issue ...
*/

/*
// This function does PUT request for updating an issue ...
*/

// Deletes single issue object with required ID
router.delete("/:id", issueController.deleteIssue);

// Returns single issue object with required ID
router.get("/:id", issueController.getIssue);

module.exports = router;
