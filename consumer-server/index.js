const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(routes)

app.listen(8080, function () {
  console.log("consumer server running on 8080");
});