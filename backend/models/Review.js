const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: "College" },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
