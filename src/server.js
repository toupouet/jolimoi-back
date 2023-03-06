const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes");
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(router);

if (!module.parent) {
  app.listen(port, function () {
    console.log(`Application listening on port : ${port}`);
  });
}

module.exports = app;
