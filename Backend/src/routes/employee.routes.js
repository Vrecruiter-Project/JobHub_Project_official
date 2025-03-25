import { Router } from "express";
import {
  editProfile,
  employeeAccount,
  checkOtp,
  otpGenerateSystem,
  myJobs,
  selectingStudentSystem,
  myJobApplyStudents,
  deSelectingStudents,
  selectingStudentsData,
  employeeLogin,
  employeeLogout,
} from "../controllers/employee.controller.js";
import { verifyJWT, isEmployee } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/mutler.middleware.js";
const router = Router();

router.route("/otp-send").post(otpGenerateSystem);
router.route("/check-otp").post(checkOtp);
///////register , login , logout /////////////
router.route("/register").post(upload.single("avatar"), employeeAccount);
router.route("/login").post(employeeLogin);
router.route("/logout").post(employeeLogout);
//////////////////////////////////////////////
router
  .route("/edit-profile")
  .put(upload.single("avatar"), verifyJWT, isEmployee, editProfile);

//router.route("/my-jobs").get(verifyJWT, isEmployee, myJobs);
router.route("/my-jobs").get(myJobs);
router.route("/my-students").get(verifyJWT, isEmployee, myJobApplyStudents);
router
  .route("/my-selecting-students")
  .get(verifyJWT, isEmployee, selectingStudentsData);
router.route("/select-students").post(verifyJWT, selectingStudentSystem);
router.route("/deselect-students").post(verifyJWT, deSelectingStudents);

export default router;
