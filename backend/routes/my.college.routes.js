const express = require("express");
const {
  getMyCollege,
  createMyCollege,
} = require("../controllers/my.college.controller.js");
const { protect } = require("../middleware/auth.middleware");
const router = express.Router();

// College routes
router.get("/", protect, getMyCollege);
router.post("/", protect, createMyCollege);

module.exports = router;
