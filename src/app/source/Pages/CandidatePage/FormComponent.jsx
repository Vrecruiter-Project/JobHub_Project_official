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
import { applyForJob } from "../../../service/operations/studentApi";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {
  const jobId = localStorage.getItem("jobId");

  // State variables
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dob: "",
    number: "",
    qualification: "",
    gender: "",
    role: "",
    address: "",
    resume: null,
    jobId,
  });
  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { number, jobId, ...restFormData } = formData;
    await applyForJob(
      { ...restFormData, mobileNumber: number, jobId },
      navigate('/candidatedashboard')
    );
  };   

  const formFields = [
    { label: "First Name", name: "firstname", type: "text", required: true },
    { label: "Last Name", name: "lastname", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Mobile", name: "number", type: "text", required: true },
    {
      label: "D.O.B",
      name: "dob",
      type: "date",
      required: true,
      InputLabelProps: { shrink: true }, // Ensures the label doesn't overlap
      placeholder: "dd/mm/yyyy",
    },
    { label: "Qualification", name: "qualification", type: "text", required: true },
    { label: "Address", name: "address", type: "text", multiline: true, required: true },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(to bottom, #4caf50, #ffffff)",
        padding: "20px",
      }}
    >
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
        <Typography variant="body2" mb={4} textAlign="center">
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
            <Select
              fullWidth
              displayEmpty
              variant="outlined"
              value={formData.role}
              onChange={handleInputChange}
              name="role"
              required
            >
              <MenuItem value="" disabled>
                Select Profile
              </MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Designer">Designer</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
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
            />
            <a href="https://resume-creator.jobhub.world/">
              <Typography component="span">
                Need a resume?{" "}
                <span style={{ color: "blue" }}>Create one now!</span>
              </Typography>
            </a>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{
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

export default FormComponent;

