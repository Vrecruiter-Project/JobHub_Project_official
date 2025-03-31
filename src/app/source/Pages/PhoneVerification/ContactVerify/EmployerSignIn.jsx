import React, { useState } from "react";
import { Box, Button, Typography, TextField, CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import PhoneVBg from "../../../../assets/Images/bgImages/PhoneVBg.png";
import { employerLogin } from "../../../../service/operations/employeeApi";

const EmployerSignIn = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true); // Set loading to true when the request starts

    try {
      const data = await employerLogin(email, password);
      if (data.success) {
        toast.success("Login Successful");
        // Store token in localStorage
        localStorage.setItem("token", JSON.stringify(data.accessToken));
        localStorage.setItem("employee", JSON.stringify(data.employee));
        navigate("/employerdashboard");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false); 
    }
  };

  return token ? (
    navigate("/employerdashboard")
  ) : (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${PhoneVBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative", 
      }}
    >
      {/* Full-page Loading Spinner Overlay */}
      {loading && (
        <Box
          sx={{
            position: "absolute", 
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)", 
            zIndex: 10, 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(5px)", 
          }}
        >
          <CircularProgress size={60} sx={{ color: "#00C853" }} />
        </Box>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            maxWidth: "1000px",
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
            backgroundColor: "#ffffff",
            position: "relative", 
            zIndex: 2, 
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                flex: 1,
                background:
                  "linear-gradient(135deg, #00C853, #B2FF59)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 6 }}>
                Discover Top Talent with <span style={{ color: "#000" }}>JOBHUB</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  background: "rgba(210, 255, 255, 0.2)",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontWeight: "medium",
                }}
              >
                Empowering Businesses to Hire Smarter
              </Typography>
            </Box>

            {/* Right Section - Login Form */}
            <Box
              sx={{
                flex: 1,
                padding: "100px",
                background: "#f9f9f9",
                textAlign: "center",
                position: "relative",
                zIndex: 2, 
              }}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
                Employer Login
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  sx={{ mb: 3 }}
                />
                <TextField
                  type="password"
                  variant="outlined"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  sx={{ mb: 4 }}
                />

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      background: "linear-gradient(135deg, #00C853, #B2FF59)",
                      color: "#fff",
                      fontSize: "16px",
                      borderRadius: "8px",
                      "&:hover": {
                        background: "linear-gradient(135deg, #00C853, #76FF03)",
                      },
                    }}
                    disabled={loading} // Disable button while loading
                  >
                    Login
                  </Button>
                </motion.div>
              </form>

              <Typography variant="body2" sx={{ mt: 3 }}>
                Don't have an account?
                <Link
                  to="/verification"
                  style={{ color: "green", textDecoration: "none", marginLeft: "5px" }}
                  onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  Register Here
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default EmployerSignIn;
