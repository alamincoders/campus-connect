const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: string, ref: "User" },
    collegeId: { type: string, ref: "College" },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
