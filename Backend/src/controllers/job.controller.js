import { Employee } from "../models/employee.model.js";
import { Job } from "../models/job.model.js";


// export const createJob = async (req, res) => {
//   try {
//     const {
//       employeeId, // Optional
//       jobDetails,
//       candidatesInterviewer,
//     } = req.body;

//     if (!jobDetails || !candidatesInterviewer) {
//       return res
//         .status(400)
//         .json({ message: "Job details and candidate details are required" });
//     }

//     const {
//       company,
//       jobTitle,
//       positions,
//       jobType,
//       workType,
//       salary,
//       benefits,
//       jobLocation,
//       postDate,
//       jobRole,
//       contactNumber, // Add contactNumber to jobDetails
//     } = jobDetails;

//     const {
//       minimumEducation,
//       englishLevelRequired,
//       totalExperienceRequired,
//       gender,
//       age,
//       jobDescription,
//       interviewMethod,
//       communicationPreferences,
//     } = candidatesInterviewer;

//     // Validate required fields (including contactNumber)
//     if (
//       [
//         company,
//         jobTitle,
//         jobType,
//         workType,
//         salary,
//         jobLocation,
//         postDate,
//         minimumEducation,
//         englishLevelRequired,
//         totalExperienceRequired,
//         gender,
//         age,
//         jobDescription,
//         interviewMethod,
//         communicationPreferences,
//         jobRole,
//         contactNumber, // Include validation for contactNumber
//       ].some((data) => !data || data?.trim() === "")
//     ) {
//       return res.status(400).json({
//         message: "All fields are required",
//       });
//     }

//     // Create new job entry with contactNumber
//     const newJob = await Job.create({
//       age,
//       benefits,
//       communication: communicationPreferences,
//       companyName: company,
//       description: jobDescription,
//       education: minimumEducation,
//       english: englishLevelRequired,
//       experience: totalExperienceRequired,
//       ExpireJob: postDate,
//       gender,
//       interviewMode: interviewMethod,
//       jobLocation,
//       jobTitle,
//       jobType,
//       numberOfPosition: positions,
//       salary,
//       workType,
//       jobRole,
//       contactNumber, // Add contactNumber to job creation
//     });

//     // If employeeId is provided, update Employee document
//     if (employeeId) {
//       const addedEntryInEmployee = await Employee.findByIdAndUpdate(
//         employeeId,
//         {
//           $push: { jobs: newJob._id },
//         }
//       );

//       if (!addedEntryInEmployee) {
//         return res.status(500).json({
//           message: "Employee reference is not passed!",
//         });
//       }
//     }

//     return res.status(201).json({
//       message: "Job Created Successfully",
//       job: newJob,
//     });
//   } catch (error) {
//     console.error("Error while creating job:", error);
//     return res.status(500).json({
//       message: "Something went wrong while creating Job",
//     });
//   }
// };

export const createJob = async (req, res) => {
  try {
    const {
      employeeId, // Required: ID of the employer creating the job
      jobDetails,
      candidatesInterviewer,
    } = req.body;

    // Check if required fields/objects are provided
    if (!employeeId || !jobDetails || !candidatesInterviewer) {
      return res.status(400).json({
        message: "employeeId, job details, and candidate details are required",
      });
    }

    // Destructure fields from jobDetails and candidatesInterviewer
    const {
      company,
      jobTitle,
      positions,
      jobType,
      workType,
      salary,
      benefits,
      jobLocation,
      postDate,
      jobRole,
      contactNumber,
    } = jobDetails;

    const {
      minimumEducation,
      englishLevelRequired,
      totalExperienceRequired,
      gender,
      age,
      jobDescription,
      interviewMethod,
      communicationPreferences,
    } = candidatesInterviewer;

    // Validate required fields
    const requiredFields = [
      employeeId,
      company,
      jobTitle,
      positions,
      jobType,
      workType,
      salary,
      jobLocation,
      postDate,
      jobRole,
      contactNumber,
      minimumEducation,
      englishLevelRequired,
      totalExperienceRequired,
      gender,
      age,
      jobDescription,
      interviewMethod,
      communicationPreferences,
    ];

    if (requiredFields.some((field) => !field || (typeof field === "string" && field.trim() === ""))) {
      return res.status(400).json({
        message: "All required fields must be provided and non-empty",
      });
    }

    // Create new job entry
    const newJob = await Job.create({
      companyName: company,
      jobTitle,
      jobRole,
      numberOfPosition: positions,
      jobType,
      workType,
      salary,
      benefits: benefits || [], // Default to empty array if not provided
      jobLocation,
      ExpireJob: postDate,
      education: minimumEducation,
      english: englishLevelRequired,
      experience: totalExperienceRequired,
      gender,
      age,
      description: jobDescription,
      interviewMode: interviewMethod,
      communication: communicationPreferences,
      contactNumber,
      employeeId, // Link job to employee (required)
    });

    // Update the Employee's jobs array
    const updatedEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      { $push: { jobs: newJob._id } },
      { new: true } // Return the updated document (optional)
    );

    if (!updatedEmployee) {
      // Rollback job creation if employee update fails
      await Job.findByIdAndDelete(newJob._id);
      return res.status(404).json({
        message: "Employee not found. Job creation aborted.",
      });
    }

    return res.status(201).json({
      message: "Job created successfully",
      job: newJob,
    });
  } catch (error) {
    console.error("Error while creating job:", error);
    return res.status(500).json({
      message: "Something went wrong while creating the job",
      error: error.message,
    });
  }
};
export const createJobadmin = async (req, res) => {
  try {
    const { employeeId, jobDetails } = req.body;

    // Ensure jobDetails exists and is an object
    if (!jobDetails || typeof jobDetails !== "object") {
      return res.status(400).json({ message: "Job details are required" });
    }

    const {
      companyName,
      jobTitle,
      jobRole,
      numberOfPosition,
      jobType,
      workType,
      salary,
      benefits,
      jobLocation,
      ExpireJob,
      education,
      english,
      experience,
      gender,
      age,
      description,
      interviewMode,
      communication,
      contactNumber,
    } = jobDetails;

    // Check for missing fields
    if (
      Object.values({
        companyName,
        jobTitle,
        jobRole,
        numberOfPosition,
        jobType,
        workType,
        salary,
        benefits,
        jobLocation,
        ExpireJob,
        education,
        english,
        experience,
        gender,
        age,
        description,
        interviewMode,
        communication,
      }).some((data) => data == null || data.toString().trim() === "")
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Ensure numeric fields are valid
    if (isNaN(numberOfPosition) || isNaN(salary) || isNaN(age)) {
      return res.status(400).json({
        message: "numberOfPosition, salary, and age must be valid numbers",
      });
    }

    // Create new job
    const newJob = await Job.create({
      companyName,
      jobTitle,
      jobRole,
      numberOfPosition,
      jobType,
      workType,
      salary,
      benefits,
      jobLocation,
      ExpireJob,
      education,
      english,
      experience,
      gender,
      age,
      description,
      interviewMode,
      contactNumber,
      communication,
    });

    // If employeeId exists, associate job with the employee
    if (employeeId) {
      const employee = await Employee.findById(employeeId);
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }
      await Employee.findByIdAndUpdate(employeeId, {
        $push: { jobs: newJob._id },
      });
    }

    return res.status(201).json({
      message: "Job Created Successfully",
      job: newJob,
    });
  } catch (error) {
    console.error("Error while creating job:", error);
    return res.status(500).json({
      message: "Something went wrong while creating the job",
      error: error.message,
    });
  }
};

export const updateJob = async (req, res) => {
  try {
    const {
      companyName,
      jobTitle,
      numberOfPosition,
      jobType,
      workType,
      ExpireJob,
      benefits,
      salary,
      jobLocation,
      education,
      english,
      experience,
      gender,
      age,
      description,
      interviewMode,
      communication,
      jobId,
      jobRole,
      contactNumber,
    } = req.body;

    // Check if jobId is provided
    if (!jobId) {
      return res.status(400).json({ message: "Job ID is required" });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      {
        companyName,
        jobTitle,
        numberOfPosition,
        jobType,
        workType,
        ExpireJob,
        benefits,
        salary,
        jobLocation,
        education,
        english,
        experience,
        gender,
        age,
        description,
        interviewMode,
        communication,
        jobRole,
        contactNumber,
      },
      { new: true }
    );

    // Check if job was found and updated
    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    return res.status(200).json({
      message: "Job is updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    console.error("Error updating job:", error);
    return res.status(500).json({
      message: "Something went wrong while updating the job",
      error: error.message,
    });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const employeeId = req.user._id;

    await Employee.findByIdAndUpdate(employeeId, {
      $pull: {
        jobs: jobId,
      },
    });

    await Job.findByIdAndDelete(jobId, { new: true });

    res.status(200).json({
      message: "Successfully Deleted !",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while deleting the job",
    });
  }
};

export const detailAboutJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    const detailOfJob = await Job.findById(jobId);

    return res.status(200).json({
      message: "Get job detail",
      job: detailOfJob,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while to get Info about Job",
    });
  }
};

export const rolewiseJobs = async (req, res) => {
  try {
    const { role } = req.body;

    const jobsByRole = await Job.find({ jobType: role });

    return res.status(200).json({
      message: "Successfully job fetched according role",
      jobs: jobsByRole,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while fetching the job according role",
    });
  }
};

export const multipleDeleteJob = async (req, res) => {
  try {
    const { jobIds } = req.body;
    const employeeId = req.user._id;

    await Employee.findByIdAndUpdate(employeeId, {
      $pull: {
        jobs: {
          $in: jobIds,
        },
      },
    });

    await Job.deleteMany({ _id: { $in: jobIds } });

    return res.status(200).json({
      message: "Jobs successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong delete multiple jobs",
    });
  }
};

export const searchedJobs = async (req, res) => {
  try {
    const { keywords } = req.body;

    const searchingJobsResponse = await Job.find({
      jobTitle: {
        $regex: keywords,
      },
    });

    return res.status(200).json({
      message: "Searched Jobs here",
      jobs: searchingJobsResponse,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while searching Jobs",
    });
  }
};
