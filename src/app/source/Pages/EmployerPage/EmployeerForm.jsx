// import React, { useState } from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import ContactVerify from "../PhoneVerification/ContactVerify/ContactVerify";
// import { registerEmployee } from "../../../service/operations/employeeApi";
// import EmployerDashboard from "./EmployerDashboard/EmployerDashboard";

// const EmployeeForm = () => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     return <EmployerDashboard />;
//   }

//   const email = localStorage.getItem("email");
//   const navigate = useNavigate();

//   const initialEmployerData = {
//     fullName: "",
//     avatar: "",
//     password: "",
//     companyName: "",
//     mobileNumber: "",
//     email,
//     gender: "",
//     gstNumber: "",
//     fromWhere: "",
//     confirmPassword: "",
//   };

//   const [employerData, setEmployerData] = useState(initialEmployerData);
//   const [profileImg, setProfileImg] = useState("");

//   // Handler to update employer data
//   const updateEmployerData = (field, value) => {
//     setEmployerData((prevData) => ({ ...prevData, [field]: value }));
//   };

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const base64Image = reader.result;
//         setProfileImg(base64Image);
//         updateEmployerData("avatar", file);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (employerData.password !== employerData.confirmPassword) {
//       return toast.error("Passwords do not match");
//     }

//     const formData = new FormData();
//     for (const key in employerData) {
//       formData.append(key, employerData[key]);
//     }

//     try {
//       await registerEmployee(formData, navigate);
//       localStorage.removeItem("email");
//       navigate("/employerdashboard");
//     } catch (error) {
//       toast.error("Registration failed. Please try again.");
//     }
//   };

//   return !email ? (
//     <ContactVerify />
//   ) : (
//     <Box
//       sx={{
//         background: "linear-gradient(to bottom, #4caf50, #ffffff)",
//         minHeight: "100vh",
//         padding: "20px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Container
//         style={{
//           boxShadow:
//             "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
//           borderRadius: "10px",
//           backgroundColor: "white",
//           padding: "30px",
//         }}
//       >
//         <Box textAlign="center" mb={5}>
//           <Typography variant="h3" sx={{ fontSize: { xs: "35px", lg: "45px" } }} gutterBottom>
//             Employer Registration Form
//           </Typography>
//           <Typography variant="h6">
//             Kindly complete the registration form to find talented candidates
//           </Typography>
//         </Box>

//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//           <Button variant="outlined" component="label" fullWidth>
//             Upload Profile Image
//             <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
//           </Button>
//           {profileImg && (
//             <Box alignSelf="center" textAlign="center" mt={2}>
//               <img
//                 src={profileImg}
//                 alt="Uploaded Preview"
//                 style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
//               />
//             </Box>
//           )}

//           <TextField
//             fullWidth
//             label="Full Name"
//             required
//             value={employerData.fullName}
//             onChange={(e) => updateEmployerData("fullName", e.target.value)}
//           />

//           <TextField
//             fullWidth
//             label="Company Name"
//             required
//             value={employerData.companyName}
//             onChange={(e) => updateEmployerData("companyName", e.target.value)}
//           />

//           <TextField
//             fullWidth
//             label="Mobile Number"
//             required
//             value={employerData.mobileNumber}
//             onChange={(e) => updateEmployerData("mobileNumber", e.target.value)}
//           />

//           <TextField fullWidth label="Email" value={employerData.email} disabled />

//           <FormControl fullWidth>
//             <InputLabel>Gender</InputLabel>
//             <Select
//               value={employerData.gender}
//               label="Gender"
//               onChange={(e) => updateEmployerData("gender", e.target.value)}
//               required
//             >
//               <MenuItem value="Male">Male</MenuItem>
//               <MenuItem value="Female">Female</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </Select>
//           </FormControl>

//           <TextField
//             fullWidth
//             label="GST Number"
//             value={employerData.gstNumber}
//             onChange={(e) => updateEmployerData("gstNumber", e.target.value)}
//           />

//           <TextField
//             fullWidth
//             label="How did you hear about us?"
//             value={employerData.fromWhere}
//             onChange={(e) => updateEmployerData("fromWhere", e.target.value)}
//           />

//           <TextField
//             fullWidth
//             label="Password"
//             required
//             type="password"
//             value={employerData.password}
//             onChange={(e) => updateEmployerData("password", e.target.value)}
//           />

//           <TextField
//             fullWidth
//             label="Confirm Password"
//             required
//             type="password"
//             value={employerData.confirmPassword}
//             onChange={(e) => updateEmployerData("confirmPassword", e.target.value)}
//           />

//           <Button type="submit" style={{ backgroundColor: "green", color: "white", padding: "15px" }}>
//             Submit
//           </Button>
//         </form>
//       </Container>
//     </Box>
//   );
// };

// export default EmployeeForm;


import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ContactVerify from "../PhoneVerification/ContactVerify/ContactVerify";
import { registerEmployee } from "../../../service/operations/employeeApi";
import EmployerDashboard from "./EmployerDashboard/EmployerDashboard";

const EmployeeForm = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <EmployerDashboard />;
  }

  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const initialEmployerData = {
    fullName: "",
    avatar: "",
    password: "",
    companyName: "",
    mobileNumber: "",
    email,
    gender: "",
    gstNumber: "",
    fromWhere: "",
    confirmPassword: "",
  };

  const [employerData, setEmployerData] = useState(initialEmployerData);
  const [profileImg, setProfileImg] = useState("");
  const [errors, setErrors] = useState({});

  const updateEmployerData = (field, value) => {
    setEmployerData((prevData) => ({ ...prevData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" })); // Clear error on input change
  };

  const validateForm = () => {
    const newErrors = {};

    if (!employerData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!employerData.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
    }

    if (!/^\d{10}$/.test(employerData.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number";
    }

    if (!employerData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (employerData.gstNumber && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(employerData.gstNumber)) {
      newErrors.gstNumber = "Invalid GST number format";
    }

    if (!employerData.password || employerData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (employerData.password !== employerData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setProfileImg(base64Image);
        updateEmployerData("avatar", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData();
    for (const key in employerData) {
      formData.append(key, employerData[key]);
    }

    try {
      await registerEmployee(formData, navigate);
      localStorage.removeItem("email");
      navigate("/employerdashboard");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return !email ? (
    <ContactVerify />
  ) : (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #4caf50, #ffffff)",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          boxShadow:
            "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "30px",
        }}
      >
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" sx={{ fontSize: { xs: "35px", lg: "45px" } }} gutterBottom>
            Employer Registration Form
          </Typography>
          <Typography variant="h6">
            Kindly complete the registration form to find talented candidates
          </Typography>
        </Box>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Button variant="outlined" component="label" fullWidth>
            Upload Profile Image
            <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
          </Button>

          {profileImg && (
            <Box alignSelf="center" textAlign="center" mt={2}>
              <img
                src={profileImg}
                alt="Uploaded Preview"
                style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
              />
            </Box>
          )}

          <TextField
            fullWidth
            label="Full Name"
            required
            value={employerData.fullName}
            onChange={(e) => updateEmployerData("fullName", e.target.value)}
            error={!!errors.fullName}
            helperText={errors.fullName}
          />

          <TextField
            fullWidth
            label="Company Name"
            required
            value={employerData.companyName}
            onChange={(e) => updateEmployerData("companyName", e.target.value)}
            error={!!errors.companyName}
            helperText={errors.companyName}
          />

          <TextField
            fullWidth
            label="Mobile Number"
            required
            value={employerData.mobileNumber}
            onChange={(e) => updateEmployerData("mobileNumber", e.target.value)}
            error={!!errors.mobileNumber}
            helperText={errors.mobileNumber}
          />

          <TextField fullWidth label="Email" value={employerData.email} disabled />

          <FormControl fullWidth error={!!errors.gender}>
            <InputLabel>Gender</InputLabel>
            <Select
              value={employerData.gender}
              label="Gender"
              onChange={(e) => updateEmployerData("gender", e.target.value)}
              required
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            {errors.gender && <Typography variant="caption" color="error">{errors.gender}</Typography>}
          </FormControl>

          <TextField
            fullWidth
            label="GST Number"
            value={employerData.gstNumber}
            onChange={(e) => updateEmployerData("gstNumber", e.target.value)}
            error={!!errors.gstNumber}
            helperText={errors.gstNumber}
          />

          <TextField
            fullWidth
            label="How did you hear about us?"
            value={employerData.fromWhere}
            onChange={(e) => updateEmployerData("fromWhere", e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            required
            type="password"
            value={employerData.password}
            onChange={(e) => updateEmployerData("password", e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            required
            type="password"
            value={employerData.confirmPassword}
            onChange={(e) => updateEmployerData("confirmPassword", e.target.value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />

          <Button type="submit" style={{ backgroundColor: "green", color: "white", padding: "15px" }}>
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default EmployeeForm;
