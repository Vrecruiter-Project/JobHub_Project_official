import { toast } from "react-toastify";
import { students } from "../apis";
import { apiConnector } from "../apiConnector";

const { ALL_JOBS, APPLY_JOB } = students;

export const allJobs = async () => {
  try {
    const response = await apiConnector("GET", ALL_JOBS);
    return response.data.jobs.map((job) => ({
      ...job,
      jobTitle: job.jobTitle
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    }));
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong!");
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
