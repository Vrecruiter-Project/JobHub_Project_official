import { Router } from "express";
import {
  createJob,
  deleteJob,
  detailAboutJob,
  multipleDeleteJob,
  rolewiseJobs,
  searchedJobs,
  updateJob,
} from "../controllers/job.controller.js";
import { verifyJWT, isEmployee } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/details").get(detailAboutJob); //Done
router.route("/role").get(rolewiseJobs); //Done
router.route("/searching-job").post(searchedJobs); // Done
router.route("/create-job").post(verifyJWT, isEmployee, createJob); //Done
router.route("/delete-job").delete(verifyJWT, isEmployee, deleteJob); //Done
router.route("/multi-delete").delete(verifyJWT, isEmployee, multipleDeleteJob); //Done
router.route("/update-job").put(verifyJWT, isEmployee, updateJob); //Done

export default router;
