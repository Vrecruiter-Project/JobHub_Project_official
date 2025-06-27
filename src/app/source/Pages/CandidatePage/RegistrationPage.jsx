// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { toast, ToastContainer } from "react-toastify";
// import registerCandidate from "../../../service/registercandidates.api";

// const RegistrationPage = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     position: "",
//     dob: "",
//     number: "",
//     qualification: "",
//     gender: "",
//     address: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSelectChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerCandidate(formData);
//       toast.success("Registration Successful!");
//       onSubmit(); // Call the function passed as a prop to close the modal
//     } catch (error) {
//       toast.error(error.message || "Registration failed.");
//     }
//   };

//   return (
//     <Box>
//       <ToastContainer />
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           boxShadow:
//             "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
//           borderRadius: "10px",
//           backgroundColor: "white",
//           padding: "30px",
//           // width: "100%",
//           // maxWidth: "600px",
//         }}
//       >
//         <Typography variant="h5" component="h1" gutterBottom fontWeight="bold" textAlign="center">
//           Candidate Registration Form
//         </Typography>
//         <Typography variant="body2" textAlign="center" sx={{ color: "red", fontSize: "12px", mb: 3 }}>
//            Kindly complete the registration form below to apply. Your opportunity awaits!
//         </Typography>
//         <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//           {["fullname", "email", "position", "dob", "number", "qualification", "address"].map((field) => (
//             <Box sx={{ mb: 3 }} key={field}>
//               <TextField
//                 fullWidth
//                 label={field.charAt(0).toUpperCase() + field.slice(1)}
//                 name={field}
//                 type={field === "dob" ? "date" : "text"}
//                 variant="outlined"
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 required
//                 InputLabelProps={field === "dob" ? { shrink: true } : {}}
//               />
//             </Box>
//           ))}

//           <Box sx={{ mb: 3 }}>
//             <Select
//               fullWidth
//               displayEmpty
//               variant="outlined"
//               value={formData.gender}
//               onChange={handleSelectChange}
//               name="gender"
//               required
//             >
//               <MenuItem value="" disabled>
//                 Select Gender
//               </MenuItem>
//               <MenuItem value="Male">Male</MenuItem>
//               <MenuItem value="Female">Female</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </Select>
//           </Box>

//           <Button
//             type="submit"
//             variant="contained"
//             color="success"
//             sx={{ width: "100%", mt: 2 }}
//           >
//             Submit
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegistrationPage;

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import registerCandidate from "../../../service/registercandidates.api";
import Modal from "@mui/material/Modal";
import confetti from "canvas-confetti";
import { gloabalTheme } from "../../../theme/theme";
import { useNavigate } from "react-router-dom";
const RegistrationPage = ({ onSubmit }) => {
  const navigate = useNavigate();
  const confettiRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      const myConfetti = confetti.create(confettiRef.current, {
        resize: true,
        useWorker: true,
      });

      myConfetti({
        particleCount: 450,
        spread: 70,
        origin: { y: 0.5 },
      });
    }, 100); // delay to ensure canvas is mounted inside modal
  };

   const handleClose = () => {
    setOpen(false);
    setTimerActive(false);
    setProgress(0);
  };
  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
            navigate("/interviewtips");
            return 100;
          }
          return oldProgress + 1;
        });
      }, 40); // 40ms * 100 = 4000ms (4 seconds)
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timerActive, navigate]);
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

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "Enter a valid 10-digit number";
    }

    if (!formData.qualification.trim())
      newErrors.qualification = "Qualification is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, gender: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    try {
      await registerCandidate(formData);
      toast.success("Registration Successful!");

      handleOpen(); // Show modal after successful registration
      setTimerActive(true); // Start the timer for progress bar
      setTimeout(() => {
        handleClose(); // closes the modal
        onSubmit(); // then call the parent callback
      }, 16000);
      // onSubmit(); // Optional: close parent modal or perform any callback
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
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: "red", fontSize: "12px", mb: 3 }}
        >
          <span className="text-sm text-black font-semibold">
            After fillup this form relevant Jobs unlocked for you{" "}
          </span>
          <br />
          Kindly complete the registration form below to apply. Your opportunity
          awaits!
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {[
            { name: "fullname", label: "Full Name" },
            { name: "email", label: "Email" },
            { name: "position", label: "Job Profile" },
            { name: "dob", label: "Date of Birth", type: "date" },
            { name: "number", label: "Mobile Number" },
            { name: "qualification", label: "Qualification" },
            { name: "address", label: "Address" },
          ].map(({ name, label, type = "text" }) => (
            <Box sx={{ mb: 3 }} key={name}>
              <TextField
                fullWidth
                label={label}
                name={name}
                type={type}
                variant="outlined"
                value={formData[name]}
                onChange={handleInputChange}
                required
                InputLabelProps={type === "date" ? { shrink: true } : {}}
                error={!!errors[name]}
                helperText={errors[name]}
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
              error={!!errors.gender}
            >
              <MenuItem value="" disabled>
                Select Gender
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            {errors.gender && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.gender}
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
              mt: 2,
              padding: "10px",
            }}
          >
            <a
              className="review-btn border-solid border-b-4 rounded-sm border-b-blue-300 text-xl text-center text-blue-500"
              href="http://search.google.com/local/writereview?placeid=ChIJtzfCMXJuNCQRkPYiWBYEXaw"
              target="_blank"
            >
              🌟Leave a Google Review🌟
            </a>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ width: "100%", mt: 2 }}
          >
            Submit
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 250,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
                textAlign: "center",
              }}
            >
              <canvas
                ref={confettiRef}
                id="confetti-canvas"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  zIndex: 10, // Highest to appear over modal
                }}
              ></canvas>
              <Typography
                id="modal-modal-title"
                variant="h6"
                fontWeight="bold"
                gutterBottom
              >
                Registration Complete!
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ fontSize: "14px", color: "gray" }}
              >
                Thank you for registering
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                After that Interview Prepration page will open !
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  p: 2,
                  height: 8,
                  borderRadius: 4,
                  mb: 3,
                  backgroundColor: "#e0e0e0",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 4,
                    backgroundColor: gloabalTheme.colors.primary,
                  },
                }}
              />
              <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                Redirecting in {(4 - progress * 0.04).toFixed(1)}s...
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 1, backgroundColor: gloabalTheme.colors.primary }}
                onClick={() => navigate("/interviewtips")}
              >
                Go Now
              </Button>
            </Box>
          </Modal>
        </form>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
