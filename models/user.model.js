import mongoose from "mongoose";

// userSchema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Is Mandatory"],
    maxlength: [15, "Name Contains Only 10 Characters"],
    minlength: [3, "Name Should Contain at least three Characters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email Is required"],
    unique: true,
    trim: true,
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  password: {
    type: String,
    required: [true, "Password Is required"],
    trim: true,
  },
  role: {
    type: String, // ✅ Corrected
    required: [true, "User Role Is Required"],
    trim: true,
  },
});

export const userModel = mongoose.model("User", userSchema);

