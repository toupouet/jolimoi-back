const express = require("express");
const conversionService = require("./conversion.service");

const router = express.Router();

const convertNumber = (req, res, next) => {
  conversionService
    .convertNumber(req.body)
    .then((response) => res.status(200).json(response))
    .catch((err) => next(err));
};

const serverSentEvents = (req, res, next) => {
  conversionService.serverSentEvents(res).catch((err) => next(err));
};

router.post("/convert-number", convertNumber);
router.get("/live-event", serverSentEvents);

module.exports = router;
