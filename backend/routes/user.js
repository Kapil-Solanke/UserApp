const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { deleteUser } = require("../controller/deleteUser");
const { getUser,getUserbyEmail } = require("../controller/getUsers");
router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.get("/getUser", getUserbyEmail);
router.delete("/deleteUser", deleteUser);

module.exports = router;
