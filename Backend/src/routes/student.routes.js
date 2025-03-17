import { Router } from "express";
import {
  applyForJob,
  allJobsForStudents,
  getstudents,
} from "../controllers/student.controller.js";
import { upload } from "../middleware/mutler.middleware.js";

const router = Router();

router.route("/applyjob").post(upload.single("resume"), applyForJob); //Pending cause of email
router.route("/jobs").get(allJobsForStudents);

router.route("/getstudents").get(getstudents);

export default router;
