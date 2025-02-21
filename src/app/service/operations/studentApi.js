import { toast } from "react-toastify";
import { students } from "../apis";
import { apiConnector } from "../apiConnector";

const { ALL_JOBS, APPLY_JOB } = students;

export const allJobs = async () => {
  try {
    const response = await apiConnector("GET", ALL_JOBS);
    return response.data.jobs;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const applyForJob = async (data, navigate) => {
  try {
    const response = await apiConnector("POST", APPLY_JOB, data, {
      "Content-Type": "multipart/form-data",
    });
    localStorage.removeItem("jobId");
    toast.success(response.data.message);
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
