const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running");
    });
  })
  .catch(() => console.log("DB error"));
const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quizzes", quizRoutes);