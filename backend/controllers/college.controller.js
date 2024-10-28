const College = require("../models/college");

exports.getColleges = async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
};

exports.getCollegeDetails = async (req, res) => {
  const college = await College.findById(req.params.id);
  if (!college) return res.status(404).json({ error: "College not found" });
  res.json(college);
};

// Add other CRUD methods as required
