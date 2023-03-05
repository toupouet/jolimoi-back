const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Application listening on port : ${port}`);
});

module.exports = app;
