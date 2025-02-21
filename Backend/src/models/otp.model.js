import mongoose, { Schema } from "mongoose";

const otpSchema = new Schema({
  email: {
    type: String,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 30 * 60,
  },
});

otpSchema.pre("save", async function (next) {
  if (this.isnew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

export const Otp = mongoose.model("Otp", otpSchema);
