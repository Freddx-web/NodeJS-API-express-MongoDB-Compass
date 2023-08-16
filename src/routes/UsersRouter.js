const express = require("express");
const router = express.Router();

const { readUser } = require('../controllers/Users.js');

router.get("/user", readUser);

module.exports = router