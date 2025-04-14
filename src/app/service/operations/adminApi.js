import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector";
import { admin, employee } from "../apis";

const {
  ALL_JOBS,
  EMPLOYEE_DATA,
  SIGNUP_LOGIN,
  STUDENTS_DATA,
  SELECTED_STUDENTS_DATA,
} = admin;

const { SELECT_STUDENTS, DE_SELECT_STUDENTS } = employee;

export const entrySystem = async (data, navigate) => {
  try {
    const response = await apiConnector("POST", SIGNUP_LOGIN, data);

    if (response.data.success) {
      localStorage.setItem("employee", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      toast.success(response.data.message);
      navigate("/admin");
    } else {
      navigate("/signup");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const fetchingEmployee = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      EMPLOYEE_DATA,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return response.data.employeesData;
    toast.success(response.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const fetchingAllStudents = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      STUDENTS_DATA,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const fetchingAllSelectedStudents = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      SELECTED_STUDENTS_DATA,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );

    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const selectingStudents = async (token, data, navigate) => {
  try {
    const response = await apiConnector("POST", SELECT_STUDENTS, data, {
      Authorization: `Bearer ${token}`,
    });
    toast.success(response.data.message);
    navigate("/admin/shortlisted-talent");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const deSelectingStudents = async (token, data, navigate) => {
  try {
    const response = await apiConnector("POST", DE_SELECT_STUDENTS, data, {
      Authorization: `Bearer ${token}`,
    });
    toast.success(response.data.message);
    navigate("/admin/job-listings");
  } catch (error) {
    toast.error(error.response.data.message);
  }
};



//not used any where