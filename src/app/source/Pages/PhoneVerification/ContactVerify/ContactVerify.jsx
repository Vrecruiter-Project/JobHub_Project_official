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
} from "@mui/material";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PhoneVBg from "../../../../assets/Images/bgImages/PhoneVBg.png";
import { checkOtp, sendOtp } from "../../../../service/operations/employeeApi";
import EmployerDashboard from "../../EmployerPage/EmployerDashboard/EmployerDashboard";

const ContactVerify = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [openOtp, setOpenOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOpenOtp = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email address
  if (emailRegex.test(email)) {
    await sendOtp(email);
    setOpenOtp(true);
    toast.success("Otp sent");
  } else {
    toast.error("Please enter a valid email address.");
  }
};

  const handleCloseOtp = () => {
    setOpenOtp(false);
  };

  const handleSubmit = async () => {
    await checkOtp(otp, email, navigate);
  };

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
      }}
    >
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
                  "linear-gradient(178deg, rgba(1,148,11,1) 0%, rgba(93,198,112,1) 0%, rgba(58,179,74,1) 0%, rgba(87,196,106,1) 0%, rgba(8,152,19,1) 0%, rgba(81,191,99,1) 0%, rgba(59,180,75,1) 0%, rgba(93,199,113,1) 5%, rgba(88,196,107,1) 20%, rgba(116,210,138,1) 26%, rgba(100,202,120,1) 42%, rgba(100,202,121,1) 43%, rgba(120,213,142,1) 54%, rgba(134,220,158,1) 64%, rgba(118,211,140,1) 73%, rgba(93,199,113,1) 94%, rgba(200,255,230,1) 100%, rgba(81,192,99,1) 100%, rgba(87,196,106,1) 100%, rgba(111,207,132,1) 100%)",
                color: "#fff",
                display: "flex",
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
                padding: "100px",
                background: "#f9f9f9",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                Get Started
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 5 }}>
                Enter your details and verify to proceed.
              </Typography>

              <TextField
                variant="outlined"
                placeholder="Enter Correct Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={{
                  maxWidth: "400px",
                  margin: "0 auto",
                  marginBottom: "20px",
                  borderRadius: "8px",
                }}
              />

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
                    fontSize: "16px",
                    borderRadius: "8px",
                    "&:hover": {
                      background: "linear-gradient(135deg, #00C853, #76FF03)",
                    },
                  }}
                >
                  Verify
                </Button>
              </motion.div>
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
            }}
          >
            Verify & Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactVerify;
