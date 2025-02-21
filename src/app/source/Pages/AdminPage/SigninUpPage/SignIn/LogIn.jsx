import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { toast } from "react-toastify";
import BG from "../../../../../assets/Images/SignPage/SignInBG.jpg";
import { entrySystem } from "../../../../../service/operations/adminApi";
import AdminDashboard from "../../AdminDashboard/AdminDashboard";

const LogIn = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  // State for form fields and errors
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "rememberMe") {
      setFormValues({ ...formValues, rememberMe: checked });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  // Handle form submission and validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = {};

    // Validate email
    if (!formValues.email) formErrors.email = "email is required";

    // Validate password
    if (!formValues.password) {
      formErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      await entrySystem(formValues, navigate);
    } else {
      toast.error("Invalid credentials");
    }
  };

  return token ? (
    <AdminDashboard />
  ) : (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        position: "relative",
      }}
    >
      {/* Home Button */}
      <IconButton
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          backgroundColor: "white",
          color: "green",
          "&:hover": { color: "white", backgroundColor: "green" },
        }}
        onClick={() => navigate("/")}
      >
        <HomeIcon />
      </IconButton>

      <Paper
        elevation={6}
        sx={{
          p: 3,
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Box align="center">
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Admin Log In
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            sx={{ mb: 2 }}
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formValues.rememberMe}
                onChange={handleChange}
                color="primary"
              />
            }
            label="Remember me"
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "green",
              "&:hover": { backgroundColor: "darkgreen" },
            }}
          >
            Log in
          </Button>
        </form>
        <Typography
          variant="body2"
          color="textSecondary"
          textAlign="center"
          sx={{ mt: 2 }}
        >
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LogIn;
