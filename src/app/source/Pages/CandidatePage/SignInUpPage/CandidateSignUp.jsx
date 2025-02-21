import React, { useState } from 'react';
import { Box, Paper, TextField, Button, FormControlLabel, Checkbox, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BG from '../../../../assets/Images/SignPage/SignInBG.jpg';
import HomeIcon from '@mui/icons-material/Home';
import { toast } from 'react-toastify';

const CandidateSignUp = () => {
  const paperStyle = {
    padding: '30px 20px',
    width: 350,
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  };

  const headerStyle = { margin: 0, fontWeight: 'bold', fontSize: '2.6rem' };
  const marginTop = { marginTop: 10 };
  const btnstyle = {
    marginTop: 20,
    backgroundColor: 'green'

  };

  // State for form fields and errors
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Validation for Name
    if (!formValues.name) formErrors.name = 'Name is required';

    // Validation for Email
    if (!formValues.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formValues.email)) formErrors.email = 'Enter a valid email';

    // Validation for Password
    if (!formValues.password) formErrors.password = 'Password is required';
    else if (formValues.password.length < 6) formErrors.password = 'Password must be at least 6 characters';

    // Validation for Confirm Password
    if (!formValues.confirmPassword) formErrors.confirmPassword = 'Confirm your password';
    else if (formValues.password !== formValues.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';

    setErrors(formErrors);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      toast.success('Form submitted successfully!');
      setTimeout(() => {
        navigate("/candidatelogin")
      }, 5000);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Home Button */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 20,
            left: 20,
            backgroundColor: 'white',
            color: 'black'
            , '&:hover': {
              color: 'white',
              backgroundColor: 'green'
            },
          }}
          onClick={() => navigate('/')}
        >
          <HomeIcon />
        </IconButton>

        <Paper elevation={10} style={paperStyle}>
          <Box align="center">
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>Please fill this form to create an account!</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              placeholder="Enter your name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              style={marginTop}
              required
            />
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              style={marginTop}
              required
            />
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              style={marginTop}
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              name="confirmPassword"
              type="password"
              value={formValues.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              style={marginTop}
              required
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="termsAccepted"
                  checked={formValues.termsAccepted}
                  onChange={(e) => setFormValues({ ...formValues, termsAccepted: e.target.checked })}
                  color="primary"
                />
              }
              label="I accept the terms and conditions."
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={btnstyle}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default CandidateSignUp;