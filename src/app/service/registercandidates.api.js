import axios from "axios";
const API_URL = "http://localhost:8000/api/candidates";

const registerCandidate = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/registercandidate`,
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
