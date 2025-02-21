import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { toast } from "react-toastify";
import BG from "../../../../../assets/Images/SignPage/SignInBG.jpg";
import { entrySystem } from "../../../../../service/operations/adminApi";
import AdminDashboard from "../../AdminDashboard/AdminDashboard";

const SignUpPage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  // Form state
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = {};

    if (!formValues.name) formErrors.name = "Name is required";
    if (!formValues.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      formErrors.email = "Enter a valid email";
    }
    if (!formValues.password) {
      formErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    if (!formValues.confirmPassword) {
      formErrors.confirmPassword = "Confirm your password";
    } else if (formValues.password !== formValues.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    if (!formValues.termsAccepted) {
      formErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      await entrySystem(formValues, navigate);
    }
  };

  return token ? (
    <AdminDashboard />
  ) : (
    <Box
      sx={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        px: 2,
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

      {/* Form Section */}
      <Grid container justifyContent="center" alignItems="center">
        <Grid item size={{ xs: 12, sm: 8, md: 6, lg: 4 }}>
          <Paper
            elevation={6}
            sx={{
              p: 3,
              borderRadius: 2,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
            >
              Admin Sign Up
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              textAlign="center"
              mb={3}
            >
              Please fill this form to create an account!
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Email"
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
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formValues.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                sx={{ mb: 2 }}
                required
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="termsAccepted"
                    checked={formValues.termsAccepted}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        termsAccepted: e.target.checked,
                      })
                    }
                  />
                }
                label="I accept the terms and conditions."
                sx={{ color: errors.termsAccepted ? "red" : "inherit", mb: 2 }}
              />
              {errors.termsAccepted && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ display: "block", mb: 2 }}
                >
                  {errors.termsAccepted}
                </Typography>
              )}
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
                Sign Up
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpPage;
