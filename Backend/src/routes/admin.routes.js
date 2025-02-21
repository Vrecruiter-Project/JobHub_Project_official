import { Router } from "express";
import {
  allEmployees,
  allJobs,
  loginSystem,
  allStudentsData,
  allSelectedStudentsData
} from "../controllers/admin.controller.js";
import { verifyJWT, isAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/entry").post(loginSystem); //Done
router.route("/employees-data").get(verifyJWT, isAdmin, allEmployees); //Done
router.route("/students-data").get(verifyJWT, isAdmin, allStudentsData); //Done
router.route("/selected-students-data").get(verifyJWT, isAdmin, allSelectedStudentsData); //Done
router.route("/alljobs").get(verifyJWT, isAdmin, allJobs); //Done

export default router;
