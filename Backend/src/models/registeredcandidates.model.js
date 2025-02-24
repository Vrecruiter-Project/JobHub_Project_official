import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  position: { type: String, required: true },
  dob: { type: String, required: true },
  number: { type: String, required: true },
  qualification: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  // resume: { type: String, required: true }, // Stores filename
});

const Candidate = mongoose.model("registeredcandidates", candidateSchema);
export default Candidate;
