import express from "express";
import {
  registerCandidate,
  getCandidates,
  updateCandidate
} from "../controllers/registeredcandidates.controller.js";

const router = express.Router();

router.post("/registercandidate", registerCandidate);
router.get("/getcandidates", getCandidates);
router.put("/updatecandidate/:id", updateCandidate);

export default router;