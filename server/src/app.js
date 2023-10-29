const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/auth/index");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    const app = express();

    app.listen(6969, () => {
      console.log("Now listening on port 6969");
    });

    app.use(express.json());
    app.use(cors());
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    app.use("/auth", authRoutes);
  })
  .catch((err) => {
    throw new Error(err);
  });
