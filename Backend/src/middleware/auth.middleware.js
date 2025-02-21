import { Employee } from "../models/employee.model.js";
import { Admin } from "../models/admin.model.js";
import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized request",
      });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const admin = await Admin.findById(decodedToken?.id).select("-password");

    if (!admin) {
      const employee = await Employee.findById(decodedToken?._id);

      if (!employee) {
        return res.status(401).json({
          message: "Invalid access token",
        });
      }
      req.user = employee;
      next();
    } else {
      req.user = admin;
      next();
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while invaild access token",
    });
  }
};

export const isEmployee = async (req, res, next) => {
  try {
    if (req.user.role !== "Employee") {
      return req.status(403).json({
        message: "It is protected route for employee",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while checking role",
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return req.status(403).json({
        message: "It is protected route for admin",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while checking role",
    });
  }
};
