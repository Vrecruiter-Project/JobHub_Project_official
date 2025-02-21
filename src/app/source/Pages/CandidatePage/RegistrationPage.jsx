import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  Input,
} from "@mui/material";
import { toast, ToastContainer } from 'react-toastify';

const RegistrationPage = ({onSubmit}) => {
  const jobId = localStorage.getItem("jobId");

  // State variables
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    position: "",
    dob: "",
    number: "",
    qualification: "",
    gender: "",
    role: "",
    address: "",
    resume: null,
    jobId,
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate numeric input for the "number" field
    if (name === "number" && !/^\d{0,10}$/.test(value)) {
      return; // Do not update the state if the input is not numeric
    }

    setFormData({ ...formData, [name]: value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // File type validation
    if (file && !["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      alert("Please upload a valid file (PDF, DOC, DOCX).");
      return;
    }

    setFormData({ ...formData, resume: file });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation for form fields
    if (!/^\d{10}$/.test(formData.number)) {
      alert("Please enter a valid numeric Whatsapp Number.");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    console.log("Form data:", formData);
    toast.success("Form submitted successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    onSubmit();
  };

  const formFields = [
    { label: "Full Name", name: "fullname", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    {
      label: "Whatsapp Number", name: "number", type: "text", required: true, inputProps: {
        inputMode: "numeric",
        pattern: "[0-9]*",
        maxLength: 10,
      },
    },
    { label: "Position", name: "position", type: "text", required: true }, // Added Position
    {
      label: "D.O.B",
      name: "dob",
      type: "date",
      required: true,
      InputLabelProps: { shrink: true },
      placeholder: "dd/mm/yyyy",
    },
    { label: "Qualification", name: "qualification", type: "text", required: true },
    { label: "Address", name: "address", type: "text", multiline: true, required: true },
  ];

  return (
    <Box>
      <ToastContainer />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "30px",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          fontWeight="bold"
          textAlign="center"
        >
          Candidate Registration Form
        </Typography>
        <Typography variant="body2" textAlign="center" sx={{ color: "red", fontSize: "12px", mb: 3 }}>

          Kindly complete the registration form below to apply. Your opportunity
          awaits!
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {formFields.map((field) => (
            <Box sx={{ mb: 3 }} key={field.name}>
              <TextField
                fullWidth
                label={field.label}
                name={field.name}
                type={field.type}
                variant="outlined"
                placeholder={field.placeholder || `Enter ${field.label}`}
                value={formData[field.name]}
                onChange={handleInputChange}
                required={field.required}
                multiline={field.multiline}
                rows={field.rows}
                InputLabelProps={field.InputLabelProps}
              />
            </Box>
          ))}
          <Box sx={{ mb: 3 }}>
            <Select
              fullWidth
              displayEmpty
              variant="outlined"
              value={formData.gender}
              onChange={handleInputChange}
              name="gender"
              required
            >
              <MenuItem value="" disabled>
                Select Gender
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" gutterBottom>
              Upload Resume
            </Typography>
            <Input
              type="file"
              fullWidth
              inputProps={{ accept: ".pdf,.doc,.docx" }}
              onChange={handleFileChange}
              required
              sx={{
                display: "block",
                backgroundColor: "#f1f1f1",
                padding: "10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            />
            <a href="https://resume-creator.jobhub.world/">
              <Typography component="span">
                Need a resume?
                <span style={{ color: "blue" }}>Create one now!</span>
              </Typography>
            </a>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{
              width: "100%",
              mt: 2,
              fontWeight: "bold",
              fontSize: "1.1rem",
              padding: "15px 60px",
              alignSelf: "center",
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
