import { Student } from "../models/student.model.js";
import { Job } from "../models/job.model.js";
import { mailSender } from "../utils/emailSender.utils.js";
import { thanksEmailTemplate } from "../templates/thanks.template.js";

export const applyForJob = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      mobileNumber,
      dob,
      gender,
      qualification,
      role,
      address,
      jobId,
    } = req.body;

    const { filename } = req.file;

    if (
      [
        firstname,
        lastname,
        email,
        mobileNumber,
        dob,
        gender,
        qualification,
        role,
        address,
        jobId
      ].some((data) => data?.trim === "")
    ) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    const studentDataForJob = await Student.create({
      firstName: firstname,
      lastName: lastname,
      mobileNumber,
      dob,
      gender,
      qualification,
      role,
      address,
      file: filename,
      jobs: jobId,
      email,
    });

    const findJob = await Job.findByIdAndUpdate(jobId, {
      $push: {
        students: studentDataForJob._id,
      },
    });

    if (!findJob) {
      return res.status(500).json({
        message: "Reference not added in Jobs",
      });
    }

    await mailSender(
      email,
      "Thanks for apply",
      thanksEmailTemplate(
        firstname,
        lastname,
        findJob.companyName,
        findJob.jobTitle
      )
    );

    return res.status(200).json({
      message: "Thanks for apply for this job",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while applying job",
    });
  }
};

export const allJobsForStudents = async (req, res) => {
  try {
    const gettingAllJobs = await Job.find({});

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
