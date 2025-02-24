import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use("/file", express.static("resumes"));
app.use(cookieParser());

// Route Import
import studentRoute from "./routes/student.routes.js";
import adminRoute from "./routes/admin.routes.js";
import employeeRoute from "./routes/employee.routes.js";
import jobRoute from "./routes/job.routes.js";
import registeredcandidates from "./routes/registeredcandidates.routes.js";
// // Routes Declarations
app.use("/api/v1/students", studentRoute);
app.use("/api/v1/admins", adminRoute);
app.use("/api/v1/employees", employeeRoute);
app.use("/api/v1/jobs", jobRoute);
//registeredcandidates
app.use("/api/candidates", registeredcandidates);

export { app };
