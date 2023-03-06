const express = require("express");
const router = express.Router();

const conversionRoutes = require("./conversion/conversion.controller");

router.use("/", conversionRoutes);

module.exports = router;
