import { employee } from "../apis";
import { apiConnector } from "../apiConnector";
import { toast } from "react-toastify";

const {
  CHECK_OTP,
  EDIT_PROFILE,
  MYJOBS,
  SEND_OTP,
  SIGNUP_LOGIN,
  SIGNIN,
  LOGOUT,
  My_STUDENTS,
  SELECT_STUDENTS,
  MY_SELECTED_STUDENTS,
  DE_SELECT_STUDENTS,
} = employee;

export const sendOtp = async (email) => {
  try {
    const response = await apiConnector("POST", SEND_OTP, {
      email,
    });

    if (!response) {
      console.log("No response from backend");
    }
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const checkOtp = async (otp, email, navigate) => {
  try {
    const response = await apiConnector("POST", CHECK_OTP, {
      otp,
      email,
    });

    if (response.data.sucess) {
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      localStorage.setItem("employee", JSON.stringify(response.data.employee));
      localStorage.removeItem("email");
      //to.success(response.data.message);
      navigate("/employerdashboard");
    } else {
      localStorage.setItem("email", email);
      navigate("/employeregistration");
    }
  } catch (error) {
    toast.error(error.response.data.message);
    console.error(error.response.data.message);
  }
};

// export const registerEmployee = async (employerData, navigate) => {
//   try {
//     const response = await apiConnector("POST", SIGNUP_LOGIN, employerData, {
//       "Content-Type": "multipart/form-data",
//     });

//     if (response.data.success) {
//       localStorage.setItem("employee", JSON.stringify(response.data.employee));
//       localStorage.setItem("token", JSON.stringify(response.data.accessToken));
//     //  console.success(response.data.message);
//       navigate("/employerdashboard");
//     } else {
//       navigate("/employeregistration");
//     }
//   } catch (error) {
//     console.error(error.response.data.message);
//   }
// };

export const registerEmployee = async (formData, navigate) => {
  try {
    const response = await apiConnector("POST", SIGNUP_LOGIN, formData, {
      "Content-Type": "multipart/form-data",
    });

    if (response.data.success) {
      localStorage.setItem("employee", JSON.stringify(response.data.employee));
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      navigate("/employerdashboard");
    } else {
      navigate("/employeregistration");
    }
  } catch (error) {
    console.error("API Error:", error?.response?.data?.message || error.message);
  }
};

export const employerLogin = async (email, password) => {
  try {
    const response = await apiConnector("POST", `${SIGNIN}`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed. Please try again.";
  }
};

export const employerLogout = async () => {
  try {
    const response = await apiConnector("POST", `${LOGOUT}`, {
    });
    return response.data; 
  } catch (error) {
    throw error.response?.data?.message || "Logout failed. Please try again.";
  }
};

export const myJobs = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      MYJOBS,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );
   // console.success(response.data.message);
    return response.data.employee.jobs;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const updateProfile = async (token, data) => {
  try {
    const response = await apiConnector("PUT", EDIT_PROFILE, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
   // console.log(response.data);
  } catch (error) {
    console.error(error.response.data.message);
  }
};

// export const myStudents = async (token) => {
//   try {
//     const response = await apiConnector(
//       "GET",
//       My_STUDENTS,
//       {},
//       {
//         Authorization: `Bearer ${token}`,
//       }
//     );

//    // console.success(response.data.message);
//     return response.data;
//   } catch (error) {
//     console.error(error.response.data.message);
//   }
// };

export const myStudents = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      My_STUDENTS,
      null, // No body needed for GET requests
      {
        Authorization: `Bearer ${token}`,
      }
    );

    return response.data;
  } catch (error) {
    console.error(error?.response?.data?.message || "Failed to fetch students");
    return null; // Optional: return null or empty array for better error handling
  }
};


export const selectingStudents = async (token, data, navigate) => {
  try {
    const response = await apiConnector("POST", SELECT_STUDENTS, data, {
      Authorization: `Bearer ${token}`,
    });
    console.success(response.data.message);
    navigate("/employerdashboard/selected-candidates");
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const deSelectingStudents = async (token, data, navigate) => {
  try {
    const response = await apiConnector("POST", DE_SELECT_STUDENTS, data, {
      Authorization: `Bearer ${token}`,
    });
    console.success(response.data.message);
    navigate("/employerdashboard/all-candidates");
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const fetchSelectingStudentsData = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      MY_SELECTED_STUDENTS,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );
    console.success(response.data.message);
    return response.data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};
