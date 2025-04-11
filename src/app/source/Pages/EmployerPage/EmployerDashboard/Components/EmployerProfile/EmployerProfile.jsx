import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  IconButton,
  Avatar,
  InputBase,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const EmployerProfile = () => {
  const initialData = {
    profileImg: "",
    companyName: "Company Name",
    fullName: "John Doe",
    mobile: "1234567890",
    email: "john.doe@example.com",
    gender: "Male",
    country: "Country",
    city: "City",
    source: "Referral",
    gstNumber: "22AAAAA0000A1Z5",
  };

  const [profileData, setProfileData] = useState(() => {
    const savedData = localStorage.getItem("employee");
    return savedData ? JSON.parse(savedData) : initialData;
  });

  const [editingField, setEditingField] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Safe logging function that hides sensitive fields
  const safeLogProfileData = (data) => {
    const sanitizedData = {...data};
    if (sanitizedData.password) {
      sanitizedData.password = '••••••••';
    }
    // console.log("Profile Data:", sanitizedData);
  };

  safeLogProfileData(profileData);

  // Update field data
  const handleChange = (field, value) => {
    setProfileData((prevData) => ({ ...prevData, [field]: value }));
  };

  // Save data on blur
  const handleBlur = () => {
    setEditingField(null);
    localStorage.setItem("employee", JSON.stringify(profileData));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData((prevData) => ({
          ...prevData,
          profileImg: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Format display value for sensitive fields
  const formatDisplayValue = (key, value) => {
    if (key === 'password') {
      return showPassword ? value : '•••••••••';
    }
    // if (key === 'mobileNumber') {
    //   return value.toString().replace(/\d(?=\d{4})/g, '•');
    // }
    return value;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 600,
          p: 3,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: 3,
          maxHeight: "79vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {/* Avatar Section */}
        <Box textAlign="center" mb={3}>
          <Avatar
            src={profileData.avatar}
            alt="Profile"
            sx={{
              width: 120,
              height: 120,
              mx: "auto",
              mb: 2,
              border: "3px solid #4caf50",
            }}
          />
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              sx={{
                backgroundColor: "#4caf50",
                "&:hover": { backgroundColor: "#388e3c" },
              }}
            >
              Upload Image
            </Button>
          </label>
          <Box
            sx={{
              cursor: "pointer",
              mt: 2,
              color: "gray",
            }}
            onClick={() => setShowEdit(!showEdit)}
          >
            <Typography variant="body2">Click to Edit Fields</Typography>
          </Box>
        </Box>

        {/* Profile Fields */}
        {Object.entries(profileData).map(([key, value]) => {
          const excludedKeys = ["_id","password", "jobs", "avatar", "updatedAt", "createdAt", "__v", "otp"];
          
          if (excludedKeys.includes(key)) return null;
          
          const displayValue = formatDisplayValue(key, value);
          
          return (
            <Box
              key={key}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                p: 1,
                borderBottom: "1px solid #ddd",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                {key.replace(/([A-Z])/g, " $1").trim()}
              </Typography>
              
              {editingField === key ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <InputBase
                    value={value}
                    onChange={(e) => handleChange(key, e.target.value)}
                    onBlur={handleBlur}
                    autoFocus
                    sx={{
                      ml: 2,
                      border: "1px solid #ccc",
                      px: 1,
                      borderRadius: "4px",
                    }}
                    type={key === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
                  />
                  {key === 'password' && (
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )}
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setEditingField(key)}
                >
                  <Typography>
                    {displayValue}
                  </Typography>
                  {key === 'password' && (
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPassword(!showPassword);
                      }}
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )}
                  {showEdit && key !== 'password' && (
                    <IconButton size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>
              )}
            </Box>
          );
        })}
      </Card>
    </Box>
  );
};

export default EmployerProfile;