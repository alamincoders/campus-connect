const MyCollege = require("../models/MyColleges.js");

exports.getMyCollege = async (req, res) => {
  const colleges = await MyCollege.find();
  res.json({ message: "Colleges fetched", data: colleges });
};
// Create a new college
exports.createMyCollege = async (req, res) => {
  try {
    const { userId, collegeId, ...rest } = req.body;

    const myCollege = new MyCollege({
      ...rest,
      userId: mongoose.Types.ObjectId(userId),
      collegeId: mongoose.Types.ObjectId(collegeId),
    });

    const savedCollege = await myCollege.save();
    res.status(201).json({ message: "College created", data: savedCollege });
  } catch (error) {
    res.status(500).json({ message: "Error creating college", error });
  }
};
