//this is only component not use api connector
import axios from "axios";
import { SERVER_URL } from "./apis";
const URL = `${SERVER_URL}/api/candidates`;

const registerCandidate = async (formData) => {
  try {
    const response = await axios.post(
      `${URL}/registercandidate`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_SECRET_KEY ,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || "An unexpected error occurred";
  }
};

export default registerCandidate;
