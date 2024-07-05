const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");

const signupUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, carNum } = req.body;
  if (!name || !email || !password || carNum) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  try {
    const hashPw = await bcrypt.hash(password, 12);
    const user = new User({
      name: name,
      email: email,
      password: hashPw,
      carNum: carNum,
    });
    const result = await user.save();
    res.status(201).json({
      _id: result._id,
      name: result.name,
      email: result.email,
      carNum: result.carNum,
      message: "User Created!",
    });
  } catch (error) {
    if (!error.stausCode) {
      error.stausCode = 500;
    }
    next(error);
  }
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("A user with this email could not be found.");
      error.statusCode = 401;
      throw error;
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Wrong Password, Enter the correct password");
      error.statusCode = 401;
      throw error;
    }
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      message: "login successful",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
});

module.exports = { signupUser, loginUser };
