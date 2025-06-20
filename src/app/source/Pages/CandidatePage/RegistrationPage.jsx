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


import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import registerCandidate from "../../../service/registercandidates.api";

const RegistrationPage = ({ onSubmit }) => {
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

    if (!formData.qualification.trim()) newErrors.qualification = "Qualification is required";
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
      onSubmit(); // close modal
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
        <Typography variant="h5" component="h1" gutterBottom fontWeight="bold" textAlign="center">
          Candidate Registration Form
        </Typography>
        <Typography variant="body2" textAlign="center" sx={{ color: "red", fontSize: "12px", mb: 3 }}>
          Kindly complete the registration form below to apply. Your opportunity awaits!
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
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>{errors.gender}</Typography>
            )}
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ width: "100%", mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegistrationPage;

