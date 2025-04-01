import axios from "axios";
import { SERVER_URL } from "./apis";

const URL=`${SERVER_URL}/api/candidates` //backup url


const registerCandidate = async (formData) => {
  try {
    const response = await axios.post(
      `${URL}/registercandidate`,
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
