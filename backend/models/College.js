const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    admissionDates: { type: String, required: true },
    events: [String],
    researchHistory: [String],
    sports: [String],
    rating: { type: Number, default: 0 },
    researchPapers: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("College", collegeSchema);
