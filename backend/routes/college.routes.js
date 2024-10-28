const express = require("express");
const {
  getColleges,
  createCollege,
  updateCollege,
  deleteCollege,
} = require("../controllers/college.controller");
const { protect } = require("../middleware/auth.middleware");
const router = express.Router();

// College routes
router.get("/", getColleges);
router.post("/", createCollege);
router.put("/:id", protect, updateCollege);
router.delete("/:id", protect, deleteCollege);

module.exports = router;
