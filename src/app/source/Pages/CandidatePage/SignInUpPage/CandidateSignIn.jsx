import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import BG from '../../../../assets/Images/SignPage/SignInBG.jpg';
import HomeIcon from '@mui/icons-material/Home';
import { toast } from 'react-toastify';

const CandidateSignIn = () => {
  const paperStyle = {
    padding: '40px 30px',
    width: 350,
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  };

  const btnstyle = {
    marginTop: 20,
    backgroundColor: 'green',
  };
  const headerStyle = { margin: 0, fontWeight: 'bold', fontSize: '2.6rem' };
  const marginTop = { marginTop: 10 };

  // State for form fields and errors
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'rememberMe') {
      setFormValues({ ...formValues, rememberMe: checked });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  // Handle form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validate username
    if (!formValues.username) formErrors.username = 'Username is required';

    // Validate password
    if (!formValues.password) formErrors.password = 'Password is required';
    else if (formValues.password.length < 6) formErrors.password = 'Password must be at least 6 characters';

    setErrors(formErrors);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      toast.success('Form submitted successfully!');
      setTimeout(() => {
        navigate("/candidatedashboard")
      }, 5000);
    }else{
      toast.error('Invalid credentials');
    }
  };

  return (
    <>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            <h2 style={headerStyle}>Log In</h2>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              placeholder="Enter username"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              error={!!errors.username}
              helperText={errors.username}
              style={marginTop}
              required
            />
            <TextField
              fullWidth
              label="Password"
              placeholder="Enter password"
              name="password"
              type="password"
              value={formValues.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              style={marginTop}
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
            />
            <Button type="submit" color="primary" variant="contained" fullWidth style={btnstyle}>
              Log in
            </Button>
          </form>
          <Typography style={signup}>
            Don't have an account? <Link to="/candidatesignup">Sign Up</Link>
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default CandidateSignIn;

