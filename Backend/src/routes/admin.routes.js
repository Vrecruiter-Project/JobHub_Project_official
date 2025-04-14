import { Router } from "express";
import {
  allEmployees,
  allJobs,
  loginSystem,
  allStudentsData,
  allSelectedStudentsData,
} from "../controllers/admin.controller.js";
import { verifyJWT, isAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/entry").post(loginSystem); 
router.route("/employees-data").get(verifyJWT, isAdmin, allEmployees);
router.route("/students-data").get(verifyJWT, isAdmin, allStudentsData); 
router
  .route("/selected-students-data")
  .get(verifyJWT, isAdmin, allSelectedStudentsData); 
//router.route("/alljobs").get(verifyJWT, isAdmin, allJobs); 
router.route("/alljobs").get(allJobs); 

export default router;
