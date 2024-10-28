const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: String,
    admissionDates: String,
    events: [String],
    researchHistory: [String],
    sports: [String],
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("College", collegeSchema);
