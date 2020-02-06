const adminController = require("../controllers/admin");

const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Admin Management
 *   - name: Car
 *     description: Car Management
 * path:
 *    /admins:
 *      get:
 *        tags:
 *          - Admin
 *        description: Use to request all customers
 *      responses:
 *        '200':
 *          description: A successful response
 */

// Getting all admins
router.get("/", adminController.getAllAdmins);

/*
    This functions creates a new admin 
*/
/**
 * @swagger
 * /admin/:id:
 *    put:
 *      tags:
 *        - Admin
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
// Updating admin with required ID
router.put("/:id", adminController.updateAdmin);

/*
// Deleting admin with required ID
*/

// Getting admin with required ID
router.get("/:id", adminController.getAdmin);

module.exports = router;
