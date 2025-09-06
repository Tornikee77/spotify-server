const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExsists = await User.findOne({ email });
  if (userExsists) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new console.error("user Already exists");
  }
  const user = await User.create({ name, email, password });

  if (user) {
    res.status(StatusCodes.CREATED).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      profilePicture: user.profilePicture,
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Invalid user Data");
  }
});

module.exports = { registerUser };
