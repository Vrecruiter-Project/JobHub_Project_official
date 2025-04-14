//Base url is used in this file and in refistercandidates.api.js only

export const SERVER_URL = import.meta.env.VITE_BASE_URL; 

export const BASE_URL = `${SERVER_URL}/api/v1`; 

export const employee = {
  SEND_OTP: BASE_URL + "/employees/otp-send", //used
  CHECK_OTP: BASE_URL + "/employees/check-otp", //used
  SIGNUP_LOGIN: BASE_URL + "/employees/register", 
  SIGNIN: BASE_URL + "/employees/login", //used
  LOGOUT: BASE_URL + "/employees/logout", //used
  MYJOBS: BASE_URL + "/employees/my-jobs", //used
  EDIT_PROFILE: BASE_URL + "/employees/edit-jobs", //used
  My_STUDENTS: BASE_URL + "/employees/my-students", //used
  SELECT_STUDENTS: BASE_URL + "/employees/select-students", 
  DE_SELECT_STUDENTS: BASE_URL + "/employees/deselect-students", 
  MY_SELECTED_STUDENTS: BASE_URL + "/employees/my-selecting-students",
};

export const admin = {
  SIGNUP_LOGIN: BASE_URL + "/admins/entry",
  EMPLOYEE_DATA: BASE_URL + "/admins/employees-data",
  ALL_JOBS: BASE_URL + "/admins/alljobs",
  STUDENTS_DATA: BASE_URL + "/admins/students-data",
  SELECTED_STUDENTS_DATA: BASE_URL + "/admins/selected-students-data",
};

export const jobs = {
  CREATE_JOB: BASE_URL + "/jobs/create-job",
  UPDATE_JOB: BASE_URL + "/jobs/update-job",
  DELELTE_JOB: BASE_URL + "/jobs/delete-job",
  ROLE_BASE_JOB: BASE_URL + "/jobs/role",
  SEARCH_JOB: BASE_URL + "/jobs/searching-job",
  DETAIL_JOB: BASE_URL + "/jobs/details",
  MULTI_DELETE_JOB: BASE_URL + "/jobs/multi-delete",
};

export const students = {
  APPLY_JOB: BASE_URL + "/students/applyjob",
  ALL_JOBS: BASE_URL + "/students/jobs",
};

