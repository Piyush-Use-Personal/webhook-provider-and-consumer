const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(routes)

app.listen(8081, function () {
  console.log("provider server running on 8081");
});