import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector";
import { jobs } from "../apis";

const {
  CREATE_JOB,
  ALL_JOBS,
  DELELTE_JOB,
  DETAIL_JOB,
  MULTI_DELETE_JOB,
  ROLE_BASE_JOB,
  SEARCH_JOB,
  UPDATE_JOB,
} = jobs;

export const createJob = async (data, token, navigate) => {
  try {
    const response = await apiConnector("POST", CREATE_JOB, data, {
      Authorization: `Bearer ${token}`,
    });
    toast.success(response.data.message);
    navigate("/employerdashboard");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// export const allJobs = async (token) => {
//   try {
//     const response = await apiConnector("GET", ALL_JOBS, {}, {
//       // Authorization: `Bearer ${token}`,
//     });
//     return response.data.jobs;
//   } catch (error) {
//     toast.error(error.response.data.message);
//   }
// };

// export const getAllJobs = async (token) => {
//   try {
//     const response = await apiConnector("GET", ALL_JOBS, {}, {
//       Authorization: `Bearer ${token}`,
//     });
//     return response.data.jobs;
//   } catch (error) {
//     console.error("Error fetching jobs:", error);
//     return [];
//   }
// };