import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordSalt: {
    type: String,
  },
  passwordChangedAt: {
    type: Date,
  },
  loginAttempts: {
    type: Number,
    default: 0,
  },
  lockUntil: {
    type: Date,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
    default: "user",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyPasswordToken: {
    type: String,
  },
  verifyPasswordTokenExpiry: {
    type: Date,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordTokenExpiry: {
    type: Date,
  },
  forgotPasswordToken: {
    type: String,
  },
  forgotPasswordTokenExpiry: {
    type: Date,
  },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
