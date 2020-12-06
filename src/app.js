"use strict";

const fs = require("fs");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  morgan("common", {
    stream: fs.createWriteStream("logs/access.log", { flags: "a" }),
  })
);
app.use("/", routes);

app.listen(3001, () => console.log(`Server running at port 3001...`));
