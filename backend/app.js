const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const collegeRoutes = require("./routes/college.routes");
const reviewRoutes = require("./routes/review.routes");

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/colleges", collegeRoutes);
app.use("/api/colleges/reviews", reviewRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;
