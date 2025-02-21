import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";

const employeeSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      index: true,
    },
    avatar: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    gender: { type: String, required: true },
    gstNumber: { type: String, required: true },
    fromWhere: { type: String, required: true },
    otp: [
      {
        type: Schema.Types.ObjectId,
        ref: "Otp",
      },
    ],
    jobs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
    role: {
      type: String,
      default: "Employee",
    },
  },
  { timestamps: true }
);

employeeSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
  );
};

export const Employee = mongoose.model("Employee", employeeSchema);
