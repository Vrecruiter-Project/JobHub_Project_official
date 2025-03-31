import axios from "axios";
import { BASE_URL } from "./apis";
//const API_URL = "https://jobhub-project-official-1.onrender.com/api/candidates";
const BASE_URL="https://jobhub-project.onrender.com/api/candidates"; //backup url


const registerCandidate = async (formData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/registercandidate`,
      formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "An unexpected error occurred";
  }
};

export default registerCandidate;
