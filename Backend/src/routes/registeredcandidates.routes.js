import express from "express";
import {
  registerCandidate,
  getCandidates,
} from "../controllers/registeredcandidates.controller.js";

const router = express.Router();

router.post("/registercandidate", registerCandidate);
router.get("/getcandidates", getCandidates);

export default router;
