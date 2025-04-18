import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  TextField,
  CircularProgress, // Add CircularProgress import
} from "@mui/material";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import PhoneVBg from "../../../../assets/Images/bgImages/PhoneVBg.png";
import { checkOtp, sendOtp } from "../../../../service/operations/employeeApi";
import EmployerDashboard from "../../EmployerPage/EmployerDashboard/EmployerDashboard";
import { teal } from "@mui/material/colors";

const ContactVerify = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [openOtp, setOpenOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleOpenOtp = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setLoading(true); // Set loading to true
      await sendOtp(email);
      setOpenOtp(true);
      setLoading(false); // Set loading to false after OTP sent
      toast.success("Otp sent");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  const handleCloseOtp = () => {
    setOpenOtp(false);
  };

  const handleSubmit = async () => {
    setLoading(true); // Set loading to true when submitting OTP
    await checkOtp(otp, email, navigate);
    setLoading(false); // Set loading to false after OTP is verified
  };
  
  // const handleSubmit = async () => {
  //   setLoading(true); // Set loading to true when submitting OTP
  //   try {
  //     await checkOtp(otp, email, navigate);
  //   } catch (error) {
  //     // Show error toast
  //     toast.error(error.message || "Invalid OTP");
  //   } finally {
  //     setLoading(false); // Always set loading to false
  //   }
  // };

  return token ? (
    <EmployerDashboard />
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
        padding: "20px",
        position: "relative", // Important for the overlay
      }}
    >
      {/* Full Screen Loader and Background Blur */}
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)", // Dark overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(10px)", // Background blur
            zIndex: 9999,
          }}
        >
          <CircularProgress size={60} sx={{ color: "#fff" }} />
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
            zIndex: 100, // Ensure this is above the loader
            position: "relative", // So it doesn't get covered by loader
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
                padding: "100px",
                background:
                  "linear-gradient(135deg, #00C853, #B2FF59)",
                color: "#fff",
                display: {xs: "none", md: "flex"},
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                  lineHeight: 1.3,
                  mb: 6,
                }}
              >
                Discover Top Talent with{" "}
                <span style={{ color: "#000" }}>JOBHUB</span>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  background: "rgba(210, 255, 255, 0.2)",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  backdropFilter: "blur(1px)",
                  fontWeight: "medium",
                }}
              >
                Empowering Businesses to Hire Smarter
              </Typography>
            </Box>

            {/* Right Section */}
            <Box
              sx={{
                flex: 1,
                padding: {xs: "45px", md: "100px"},
                width:{xs: "100%", md: "100%"},
                background: "#f9f9f9",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, fontSize: { xs: "28px", md: "40px" } }}>
                Get Started
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 5, fontSize: { xs: "12px", md: "16px" } }}>
                Enter your details and verify to proceed.
              </Typography>

              <TextField
                variant="outlined"
                placeholder="Enter Your Email Address"
                value={email}
                
                onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                size="small"
                type="email"
                sx={{
                  maxWidth: {xs: "90%", md: "400px"},
                  margin: "0 auto",
                  marginBottom: "20px",
                  borderRadius: "8px",
                }}
                InputProps={{
                  sx: {
                    "&::placeholder": {
                      fontSize: "16px", 
                    },
                    "& input::placeholder": {
                      fontSize:{xs: "12px", md: "16px"},
                    },
                  },
                }}
              />

              {/* Verify Button with Spinner */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="contained"
                  onClick={handleOpenOtp}
                  sx={{
                    padding: "10px 20px",
                    background: "linear-gradient(135deg, #00C853, #B2FF59)",
                    color: "#fff",
                    fontSize: {xs: "12px", md: "16px"},
                    borderRadius: "8px",
                    "&:hover": {
                      background: "linear-gradient(135deg, #00C853, #76FF03)",
                    },
                    position: "relative",
                    pointerEvents: loading ? "none" : "auto", // Disable interactions during loading
                  }}
                >
                  {loading ? (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: "#fff",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        marginTop: "-12px",
                        marginLeft: "-12px",
                      }}
                    />
                  ) : (
                    "Verify"
                  )}
                </Button>
              </motion.div>
              <div className="mt-4">
                <Typography variant="body2" color="textSecondary" sx={{ fontSize: { xs: "12px", md: "16px" } }}>
                  Already have an account?{" "}</Typography>
                <Link to="/employerlogin">
                  <span
                    className="mx-1"
                    style={{
                      fontSize: { xs: "12px", md: "16px" },
                      
                      color: "green",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                  >
                    Login
                  </span>
                </Link>
              </div>
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* OTP Dialog */}
      <Dialog open={openOtp} onClose={handleCloseOtp} maxWidth="sm">
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #00C853, #B2FF59)",
            color: "#fff",
          }}
        >
          Enter OTP
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" align="center" sx={{ mb: 2 }}>
            Enter the OTP sent to your phone.
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            fullWidth
            sx={{
              maxWidth: "400px",
              margin: "0 auto",
              mb: 2,
              borderRadius: "8px",
            }}
          />
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #00C853, #B2FF59)",
              color: "#fff",
              fontSize: "14px",
              "&:hover": {
                background: "linear-gradient(135deg, #00C853, #76FF03)",
              },
              pointerEvents: loading ? "none" : "auto", // Disable button during loading
            }}
          >
            {loading ? (
              <CircularProgress
                size={24}
                sx={{
                  color: "#fff",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            ) : (
              "Verify & Proceed"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactVerify;
