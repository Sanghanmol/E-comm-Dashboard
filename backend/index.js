const express = require("express");
const routes = require("./route");

const app = express();
const cors = require("cors");
const path = require('path');

require("dotenv").config();
require("./db/config");

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "frontend", "build", "index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
