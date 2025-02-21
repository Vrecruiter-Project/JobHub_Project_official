// See all employee with their jobs and with that students who are applying in their jobs
import { Employee } from "../models/employee.model.js";
import { Admin } from "../models/admin.model.js";
import { Job } from "../models/job.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Student } from "../models/student.model.js";

export const allEmployees = async (req, res) => {
  try {
    const employeesData = await Employee.find();

    return res.status(200).json({
      message: "All data fetched successfully",
      employeesData,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while fetching all data",
    });
  }
};

export const loginSystem = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (email === "" || password === "") {
      return res.status(400).json({
        message: "All fields required!",
      });
    }

    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      const isPasswordValid = await adminExists.isPasswordCorrect(password);

      if (!isPasswordValid) {
        return res.status(403).json({
          message: "Password is incorrect",
        });
      }

      const accessToken = jwt.sign(
        {
          id: adminExists._id,
          fullName: adminExists.fullName,
          role: adminExists.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "6h",
        }
      );

      const options = {
        httpOnly: true,
        secure: true,
      };

      return res.status(200).cookie("accessToken", accessToken, options).json({
        success: true,
        message: "Login Successfully!",
        user: adminExists,
        accessToken,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({
      email,
      fullName: name,
      password: hashedPassword,
    });

    const accessToken = jwt.sign(
      {
        id: newAdmin._id,
        fullName: newAdmin.fullName,
        role: newAdmin.role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "6h",
      }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res.status(200).cookie("accessToken", accessToken, options).json({
      success: true,
      message: "New admin Created and login",
      user: newAdmin,
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while login",
    });
  }
};

export const allJobs = async (req, res) => {
  try {
    const gettingAllJobs = await Job.find({}).populate("students").exec();

    return res.status(200).json({
      message: "All Jobs fetched successfully",
      jobs: gettingAllJobs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while getting all jobs",
    });
  }
};

export const jobFilterAccordingRole = async (req, res) => {
  try {
    const { role } = req.body;

    const filteredJobs = await Job.find({
      jobType: role,
    });

    return res.status(200).json({
      message: "Data is filter",
      jobs: filteredJobs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while filtering Jobs",
    });
  }
};

export const filterStudentAccordingRole = async (req, res) => {
  try {
    const { role } = req.body;

    const filteredStudents = await Student.find({
      role,
    });

    return res.status(200).json({
      message: "Student is filter",
      students: filteredStudents,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while filtering Students",
    });
  }
};

export const allStudentsData = async (req, res) => {
  try {
    const allStudents = await Job.find().populate("students").exec();

    const response = allStudents.map((data) => data.students);

    return res.status(200).json({
      message: "Students data fetched",
      students: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetch all students data",
    });
  }
};

export const allSelectedStudentsData = async (req, res) => {
  try {
    const allSelectedStudents = await Job.find()
      .populate("selectedStudents")
      .exec();

    const response = allSelectedStudents.map((data) => data.selectedStudents);

    return res.status(200).json({
      message: "Selected Students data fetched",
      students: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetch selected students data",
    });
  }
};
