const express = require("express");
const {
  getColleges,
  getCollegeDetails,
} = require("../controllers/college.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", getColleges);
router.get("/:id", protect, getCollegeDetails);

module.exports = router;
