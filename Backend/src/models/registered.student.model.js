import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    Age: {
      type: Number,
      required: true,
      trim: true,
      index: true,
    },
    profile: {
      type: String,
      required: true,
      trim: true,
    },
    whatsappNumber: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    jobRole: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    jobs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);
