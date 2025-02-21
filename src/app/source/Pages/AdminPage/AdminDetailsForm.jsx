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

const AdminDetailsForm = () => {
    const [profileImg, setProfileImg] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const navigate = useNavigate();

    // Handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImg(reader.result); // Store base64 image data
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation
        if (!fullName || !email || !mobile || !country || !city || !postalCode) {
            toast.error("All fields are required!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email address!");
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            toast.error("Mobile number must be 10 digits!");
            return;
        }

        console.log({
            profileImg,
            fullName,
            email,
            mobile,
            country,
            city,
            postalCode,
        });

        toast.success("Form Submitted Successfully!");
        setTimeout(() => {
            navigate("/admin");
        }, 3000);
    };

    return (
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
                    <Typography
                        variant="h3"
                        sx={{ fontSize: { xs: "35px", lg: "45px" } }}
                        gutterBottom
                    >
                        Admin Registration Form
                    </Typography>
                    <Typography variant="h6">
                        Please complete the form to register as an admin.
                    </Typography>
                </Box>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    onSubmit={handleSubmit}
                >
                    <Button
                        variant="outlined"
                        component="label"
                        fullWidth
                    >
                        Upload Profile Image
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleImageUpload}
                        />
                    </Button>
                    {profileImg && (
                        <Box textAlign="center" mt={2}>
                            <img
                                src={profileImg}
                                alt="Uploaded Preview"
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    )}
                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        placeholder="Enter Full Name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        placeholder="Enter Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Mobile Number"
                        variant="outlined"
                        placeholder="Enter Mobile Number"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <FormControl fullWidth>
                        <InputLabel>Country</InputLabel>
                        <Select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            label="Country"
                            required
                        >
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="Canada">Canada</MenuItem>
                            <MenuItem value="Australia">Australia</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        placeholder="Enter City"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Postal Code"
                        variant="outlined"
                        placeholder="Enter Postal Code"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <Box textAlign="center">
                        <Button
                            type="submit"
                            style={{
                                border: "1px solid green",
                                padding: "15px 60px",
                                backgroundColor: "green",
                                color: "white",
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
            </Container>
        </Box>
    );
};

export default AdminDetailsForm;
