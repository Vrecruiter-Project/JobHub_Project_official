import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { TextField, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const [toast, setToast] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});


  const handleToastClose = () => {
    setToast({ ...toast, open: false });
  };


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setToast({
        open: true,
        severity: "error",
        message: "❗ Please fill in all required fields.",
      });
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    emailjs
      .sendForm(
        "service_j46mlno",
        "template_f8jx8at",
        form.current,
        "xGGiT_8LYxsZzpBz4"
      )
      .then((result) => {
        console.log(result.text);
        setToast({
          open: true,
          severity: "success",
          message: "Thanks! Your message has been sent to the JobHub team. We'll contact you soon.",
        });
        e.target.reset();
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error.text);
        setToast({
          open: true,
          severity: "error",
          message: "Oops! Something went wrong. Please try again.",
        });
      });
  };


  return (
    <Box>
      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{
          maxWidth: "1146px",
          margin: "auto",
          padding: "20px",
          paddingBottom: "80px",
        }}
      >
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              name="first_name"
              placeholder="Enter First Name*"
              required
              value={formData.first_name}
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              error={!!errors.first_name}
              helperText={errors.first_name}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              name="last_name"
              placeholder="Enter Last Name*"
              required
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              error={!!errors.last_name}
              helperText={errors.last_name}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              name="email"
              type="email"
              placeholder="Enter Email Address*"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              name="phone"
              placeholder="Enter Phone Number*"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              name="message"
              placeholder="Enter Message"
              multiline
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              error={!!errors.message}
              helperText={errors.message}
            />
          </Grid>
          <Grid
            size={12}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{
                  height: "60px",
                  fontSize: "18px",
                  margin: "30px 0",
                  backgroundColor: "#41A748",
                  "&:hover": {
                    backgroundColor: "#41a900",
                  },
                }}
              >
                Send Us
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar
          open={toast.open}
          autoHideDuration={5000}
          onClose={handleToastClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleToastClose}
            severity={toast.severity}
            sx={{ width: "100%" }}
            variant="filled"
          >
            {toast.message}
          </Alert>
        </Snackbar>

      </Box>
    </Box>
  );
};

export default ContactForm;