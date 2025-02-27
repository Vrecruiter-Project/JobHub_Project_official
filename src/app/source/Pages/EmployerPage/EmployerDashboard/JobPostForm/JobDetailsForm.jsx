//job details form three steps
import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stepper,
  Step,
  Chip,
  StepLabel,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createJob } from "../../../../../service/operations/jobApi";
import dayjs from "dayjs";
import ContactVerify from "../../../PhoneVerification/ContactVerify/ContactVerify";

const steps = [
  "Job Details",
  "Candidate & Interviewer Insights",
  "Final Review & Submission",
];

const JobDetailsForm = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const employeeCompanyName = JSON.parse(localStorage.getItem("employee"));
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobDetails: {
      company: employeeCompanyName.companyName,
      jobTitle: "",
      jobRole: "",
      positions: "",
      jobType: "",
      workType: "",
      salary: "",
      benefits: [],
      postDate: "",
      jobLocation: "",
    },
    candidatesInterviewer: {
      minimumEducation: "",
      englishLevelRequired: "",
      totalExperienceRequired: "",
      gender: "",
      age: "",
      jobDescription: "",
      interviewMethod: "",
      communicationPreferences: "",
    },
  });

  const benefitsOptions = [
    "Health Insurance",
    "Retirement Plans",
    "Paid Time Off",
    "ESCI",
    "Provident Fund",
    "Flexible Working Hours",
  ];

  const handleNext = () => {
    if (!validateFormData()) return;
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateFormData()) return;

    await createJob(formData, token, navigate);
  };

  const validateFormData = () => {
    const { jobDetails, candidatesInterviewer } = formData;
    const requiredFields =
      activeStep === 0
        ? ["company", "jobTitle", "jobType", "workType"]
        : ["minimumEducation", "englishLevelRequired"];
    const isValid = requiredFields.every((field) =>
      activeStep === 0 ? jobDetails[field] : candidatesInterviewer[field]
    );

    if (!isValid) {
      toast.error("Please fill all required fields!");
      return false;
    }
    return true;
  };

  const handleChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], [field]: value },
    }));
  };

  const renderTextField = (
    label,
    section,
    field,
    required = false,
    multiline = false,
    rows = 1
  ) => (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      required={required}
      multiline={multiline}
      rows={rows}
      value={formData[section][field]}
      onChange={(e) => handleChange(section, field, e.target.value)}
    />
  );

  // Inside the JobDetailsForm component
  const renderDatePicker = (label, section, field, required = false) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={
          formData[section][field] ? dayjs(formData[section][field]) : null
        }
        onChange={(date) =>
          handleChange(
            section,
            field,
            date ? date.toISOString() : ""
            // e.target.value // Format to ISO string or clear
          )
        }
        renderInput={(params) => (
          <TextField
            fullWidth
            required={required}
            {...params}
            helperText={required ? "Required" : ""}
          />
        )}
      />
      {/* <DatePicker/> */}
    </LocalizationProvider>
  );

  const renderSelectField = (
    label,
    section,
    field,
    options,
    isMultiple = false
  ) => (
    <FormControl fullWidth required>
      <InputLabel>{label}</InputLabel>
      <Select
        value={formData[section][field]}
        label={label}
        multiple={isMultiple}
        onChange={(e) => handleChange(section, field, e.target.value)}
        renderValue={(selected) =>
          isMultiple ? (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value, index) => (
                <Chip key={index} label={value} />
              ))}
            </Box>
          ) : (
            selected
          )
        }
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {isMultiple ? (
              <>
                <Checkbox checked={formData[section][field].includes(option)} />
                <ListItemText primary={option} />
              </>
            ) : (
              option
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            {renderTextField("Company Name", "jobDetails", "company", true)}
            <Box sx={{ display: "flex", gap: "20px" }}>
              {renderTextField("Job Title", "jobDetails", "jobTitle", true)}
              {renderSelectField("Job Role", "jobDetails", "jobRole", [
                "TeleCaller",
                "Document-Verification",
                "Data-Entry",
                "Web-Designer",
                "Graphic-Designer",
                "Web-Developer",
                "Construction",
                "Front-Office",
                "Back-Office",
                "House-Keeping",
                "Delivery",
                "Security-Guard",
                "Hotel-Staff",
                "Ware-House-Staff",
                "Factory-Workers",
                "Digital Marketing",
                "Content Writing",
                "SEO",
                "video Editing",
                "Photography",
                "Photo Editing",
                "Accounting",
                "HR",
                "Electrical",
                "Plumbing",
                "Mechanical",
                "Technical",
              ])}
            </Box>
            {renderTextField(
              "Number of Positions",
              "jobDetails",
              "positions",
              true
            )}
            <Box sx={{ display: "flex", gap: "20px" }}>
              {renderSelectField("Job Type", "jobDetails", "jobType", [
                "Part-Time",
                "Full-Time",
                "Part-Time / Full-Time",
              ])}
              {renderSelectField("Work Type", "jobDetails", "workType", [
                "Work-From-Office",
                "Work-From-Home",
                "Work-From-Office / Work-From-Home",
              ])}
            </Box>
            {renderDatePicker("Post Date", "jobDetails", "postDate")}

            <Box sx={{ display: "flex", gap: "20px" }}>
              {renderSelectField(
                "Benefits",
                "jobDetails",
                "benefits",
                benefitsOptions,
                true
              )}
              {renderTextField("Salary", "jobDetails", "salary", true)}
            </Box>
            {renderTextField("Job Location", "jobDetails", "jobLocation", true)}
          </>
        );
      case 1:
        return (
          <>
            {renderSelectField(
              "Minimum Education",
              "candidatesInterviewer",
              "minimumEducation",
              [
                "10th Pass",
                "12th Pass",
                "Graduate",
                "Post Graduate",
                "Diploma Holder",
              ]
            )}
            <Box sx={{ display: "flex", gap: "20px" }}>
              {renderSelectField(
                "English Level Required",
                "candidatesInterviewer",
                "englishLevelRequired",
                [
                  "No English",
                  "Basic English",
                  "Good English",
                  "Advanced English",
                ]
              )}
              {renderSelectField(
                "Total Experience Required",
                "candidatesInterviewer",
                "totalExperienceRequired",
                ["Any", "Experienced Only", "Freshers Only"]
              )}
            </Box>
            <Box sx={{ display: "flex", gap: "20px" }}>
              {renderSelectField("Gender", "candidatesInterviewer", "gender", [
                "Male",
                "Female",
                "Any",
              ])}
              {renderTextField("Age", "candidatesInterviewer", "age", true)}
            </Box>
            {renderSelectField(
              "Communication Preferences",
              "candidatesInterviewer",
              "communicationPreferences",
              ["WhatsApp Only", "Direct Call", "Email", "SMS"]
            )}

            {renderSelectField(
              "Interview Method",
              "candidatesInterviewer",
              "interviewMethod",
              ["In-Person", "Virtual"]
            )}
            {renderTextField(
              "Job Description",
              "candidatesInterviewer",
              "jobDescription",
              false,
              true,
              4
            )}
          </>
        );
      case 2:
        return <ReviewPage formData={formData} handleSubmit={handleSubmit} />;
      default:
        return <Typography>Unknown Step</Typography>;
    }
  };

  return !token ? (
    <ContactVerify />
  ) : (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          boxShadow: "0px 3px 5px -1px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "30px",
        }}
      >
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" gutterBottom>
            {steps[activeStep]}
          </Typography>
          <Typography variant="h6">
            {activeStep === steps.length - 1
              ? "Finalize Your Job Posting"
              : "Provide the Required Information"}
          </Typography>
        </Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {renderStepContent(activeStep)}
          {activeStep < steps.length - 1 && (
            <Box display="flex" justifyContent="space-between" mt={3}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                sx={{
                  background:
                    "radial-gradient(circle, rgba(46,138,69,1) 0%, rgba(79,170,92,1) 95%)",
                  color: "white",
                  px: 3,
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
                sx={{
                  background:
                    "radial-gradient(circle, rgba(46,138,69,1) 0%, rgba(79,170,92,1) 95%)",
                  color: "white",
                  px: 3,
                }}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          )}
        </form>
      </Container>
    </Box>
  );
};

const ReviewPage = ({ formData, handleSubmit }) => {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardStyle = {
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionAnimation}
      style={{
        padding: "20px",
        backgroundColor: "rgba(121,121,121,0.2)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Final Review
      </Typography>
      <Typography variant="body1" gutterBottom>
        Job Details:
      </Typography>
      <Box style={cardStyle}>
        {Object.entries(formData.jobDetails).map(([key, value]) => (
          <Typography key={key}>
            {key}: {Array.isArray(value) ? value.join(", ") : value}
          </Typography>
        ))}
      </Box>
      <Typography variant="body1" gutterBottom>
        Candidate & Interviewer Insights:
      </Typography>
      <Box style={cardStyle}>
        {Object.entries(formData.candidatesInterviewer).map(([key, value]) => (
          <Typography key={key}>
            {key}: {value}
          </Typography>
        ))}
      </Box>
      <Box mt={3}>
        <Button
          variant="contained"
          sx={{
            background:
              "radial-gradient(circle, rgba(46,138,69,1) 0%, rgba(79,170,92,1) 95%)",
            color: "white",
            px: 3,
          }}
          onClick={handleSubmit}
        >
          Confirm & Submit
        </Button>
      </Box>
    </motion.div>
  );
};

export default JobDetailsForm;



