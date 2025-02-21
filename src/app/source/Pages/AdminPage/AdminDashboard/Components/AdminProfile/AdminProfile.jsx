import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import MoneyIcon from "@mui/icons-material/Money";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import SaveIcon from "@mui/icons-material/Save";
import ProfileImg from "../../../../../../assets/Images/profileImg.jpg";
import PhoneVBg from "../../../../../../assets/Images/bgImages/PhoneVBg.png";

const AdminProfile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    companyName: "ABC Pvt. Ltd.",
    companyGST: "GST123456",
    phone: "+1 123-456-7890",
    email: "john.doe@example.com",
  });

  const [isEditing, setIsEditing] = useState(null); // Tracks which field is being edited.
  const [editMode, setEditMode] = useState(false); // Tracks whether editing mode is enabled.

  const handleEditClick = (field) => {
    setIsEditing(field);
  };

  const handleSaveClick = () => {
    setIsEditing(null);
  };

  const handleChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setIsEditing(null); 
  };

  const profileFields = [
    { label: "Full Name", key: "fullName", icon: <AccountCircle /> },
    { label: "Company Name", key: "companyName", icon: <BusinessIcon /> },
    { label: "Company GST", key: "companyGST", icon: <MoneyIcon /> },
    { label: "Phone", key: "phone", icon: <ContactPhoneIcon /> },
    { label: "Email", key: "email", icon: <EmailIcon /> },
  ];

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "80vh",
        overflow: "hidden"
      }}
    >
      <Card
        sx={{
          m: 1,
          p: 4,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundImage: `url(${PhoneVBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "70vh",
          borderRadius: "16px",
          overflowY: "scroll", 
        }}
      >
        <Grid container spacing={4}>
          <Grid
            item
            size={{ xs: 12, md: 12 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={ProfileImg}
              alt="Profile"
              sx={{
                width: "160px",
                height: "160px",
                border: "5px solid #4caf50",
                borderRadius: "50%",
                mb: 2,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
            <Typography variant="h5" fontWeight="bolder" sx={{
              color: "#e0e0e0",
              backgroundColor: "green",
              px: 2,
              py: 1,
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}>
              Employer Profile
            </Typography>
          </Grid>
          <Grid item size={{ xs: 12, md: 12 }}>
            <Card
              sx={{
                p: 4,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Employer Details
                <IconButton
                  sx={{ ml: 1, cursor: "pointer" }}
                  onClick={toggleEditMode}
                >
                  <EditIcon sx={{ color: "green" }} />
                </IconButton>
              </Typography>
              {profileFields.map((field, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                    borderBottom: "1px solid #e0e0e0",
                    pb: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {React.cloneElement(field.icon, {
                      sx: { color: "#4caf50", mr: 2 },
                    })}
                    {isEditing === field.key ? (
                      <TextField
                        value={profileData[field.key]}
                        label={field.label}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        fullWidth
                        variant="filled"
                        size="small"
                      />
                    ) : (
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {profileData[field.key]}
                      </Typography>
                    )}
                  </Box>
                  {editMode && ( // Show the edit icons only when `editMode` is true.
                    <IconButton
                      onClick={() =>
                        isEditing === field.key
                          ? handleSaveClick()
                          : handleEditClick(field.key)
                      }
                      sx={{ color: "#4caf50" }}
                    >
                      {isEditing === field.key ? <SaveIcon /> : <EditIcon />}
                    </IconButton>
                  )}
                </Box>
              ))}
              {editMode && (
                <Button
                  variant="contained"
                  fullWidth
                  onClick={toggleEditMode}
                  sx={{
                    mt: 2,
                    backgroundColor: "#4caf50",
                    "&:hover": { backgroundColor: "#43a047" },
                  }}
                >
                  Save All Changes
                </Button>
              )}
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AdminProfile;


