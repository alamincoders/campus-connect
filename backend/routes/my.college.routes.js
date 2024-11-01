const express = require("express");
const {
  getMyCollege,
  createMyCollege,
} = require("../controllers/my.college.controller.js");
const { protect } = require("../middleware/auth.middleware");
const router = express.Router();

// College routes
router.get("/",  getMyCollege);
router.post("/", createMyCollege);

module.exports = router;
