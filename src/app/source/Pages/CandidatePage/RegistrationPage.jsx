import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import registerCandidate from "../../../service/registercandidates.api";

const RegistrationPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    position: "",
    dob: "",
    number: "",
    qualification: "",
    gender: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerCandidate(formData);
      toast.success("Registration Successful!");
      onSubmit(); // Call the function passed as a prop to close the modal
    } catch (error) {
      toast.error(error.message || "Registration failed.");
    }
  };

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
        <Typography variant="h5" component="h1" gutterBottom fontWeight="bold" textAlign="center">
          Candidate Registration Form
        </Typography>
        <Typography variant="body2" textAlign="center" sx={{ color: "red", fontSize: "12px", mb: 3 }}>
           Kindly complete the registration form below to apply. Your opportunity awaits!
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {["fullname", "email", "position", "dob", "number", "qualification", "address"].map((field) => (
            <Box sx={{ mb: 3 }} key={field}>
              <TextField
                fullWidth
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                type={field === "dob" ? "date" : "text"}
                variant="outlined"
                value={formData[field]}
                onChange={handleInputChange}
                required
                InputLabelProps={field === "dob" ? { shrink: true } : {}}
              />
            </Box>
          ))}

          <Box sx={{ mb: 3 }}>
            <Select
              fullWidth
              displayEmpty
              variant="outlined"
              value={formData.gender}
              onChange={handleSelectChange}
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

          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ width: "100%", mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
