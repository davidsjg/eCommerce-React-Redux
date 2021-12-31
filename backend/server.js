const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3053;
const connectDB = require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/eCommerceDB");

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
