const express = require("express");

const { sendContactMessage } = require("../controllers/contactController.js");

const router = express.Router();

router.post("/", sendContactMessage);

module.exports = router;
