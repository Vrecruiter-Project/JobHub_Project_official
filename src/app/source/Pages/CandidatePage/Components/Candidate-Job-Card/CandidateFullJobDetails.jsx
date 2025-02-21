// import React, { useEffect, useState } from "react";
// import { Box, Typography, Divider, Card, CardContent } from "@mui/material";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import GroupIcon from "@mui/icons-material/Group";

// const CandidateFullJobDetails = ({ jobId }) => {
//   const [jobData, setJobData] = useState(null);

//   useEffect(() => {
//     // Retrieve the data from localStorage
//     const storedData = localStorage.getItem("formData");
//     if (storedData) {
//       setJobData(JSON.parse(storedData)[0]); // Assuming the data is an array
//     }
//   }, []);

//   if (!jobData) {
//     return (
//       <Typography
//         variant="h6"
//         align="center"
//         sx={{ marginTop: "20px", color: "gray" }}
//       >
//         No Job Details Available. Please fill out the form first.
//       </Typography>
//     );
//   }

//   const { jobDetails, candidatesInterviewer } = jobData;

//   return (
//     <Box
//       sx={{
//         marginTop: "40px",
//         paddingBottom: "40px",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Card
//         sx={{
//           width: "100%",
//           maxWidth: "95vw",
//           boxShadow: "0 4px 10px rgba(53,180,81,0.5)",
//           borderRadius: "12px",
//           padding: "20px",
//           background: "linear-gradient(135deg, rgba(53,180,81,0.1), #ffffff)",
//         }}
//       >
//         <CardContent>
//           <Typography
//             variant="h4"
//             align="center"
//             sx={{
//               color: "#3db435",
//               fontWeight: "bold",
//               marginBottom: "20px",
//               textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             Job Post Details
//           </Typography>

//           {/* Job Details Section */}
//           <Box sx={{ marginBottom: "30px" }}>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <WorkOutlineIcon sx={{ color: "#3db435", mr: 1 }} />
//               <Typography
//                 variant="h5"
//                 sx={{ color: "#3db435", fontWeight: "bold" }}
//               >
//                 Job Details
//               </Typography>
//             </Box>
//             <Divider sx={{ marginBottom: "10px" }} />
//             {Object.entries(jobDetails).map(([key, value]) => (
//               <Box key={key} sx={{ marginBottom: "10px" }}>
//                 <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                   {key.replace(/([A-Z])/g, " $1")}:
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {Array.isArray(value) ? value.join(", ") : value || "N/A"}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>

//           {/* Candidate & Interviewer Insights Section */}
//           <Box>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <GroupIcon sx={{ color: "#3db435", mr: 1 }} />
//               <Typography
//                 variant="h5"
//                 sx={{ color: "#3db435", fontWeight: "bold" }}
//               >
//                 Candidate & Interviewer Insights
//               </Typography>
//             </Box>
//             <Divider sx={{ marginBottom: "10px" }} />
//             {Object.entries(candidatesInterviewer).map(([key, value]) => (
//               <Box key={key} sx={{ marginBottom: "10px" }}>
//                 <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                   {key.replace(/([A-Z])/g, " $1")}:
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {value || "N/A"}
//                 </Typography>
//               </Box>
//             ))}
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default CandidateFullJobDetails;

import React, { useEffect, useState } from "react";
import { Box, Typography, Divider, Card, CardContent } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GroupIcon from "@mui/icons-material/Group";

const CandidateFullJobDetails = ({ jobId }) => {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    try {
      // Retrieve the data from localStorage
      const storedData = localStorage.getItem("formData");
      console.log("Stored Data:", storedData); // Debugging log

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log("Parsed Data:", parsedData); // Debugging log

        // Find the job data by jobId if provided
        const job = jobId
          ? parsedData.find((job) => job.id === jobId)
          : parsedData[0];

        setJobData(job || null); // Set jobData or null if not found
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, [jobId]);

  if (!jobData) {
    return (
      <Typography
        variant="h6"
        align="center"
        sx={{ mt: 3, color: "gray" }}
      >
        No Job Details Available. Please fill out the form first.
      </Typography>
    );
  }

  return (
    <Card sx={{ mt: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {jobData.title}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box display="flex" alignItems="center" mt={2}>
          <WorkOutlineIcon sx={{ mr: 1 }} />
          <Typography variant="body1">{jobData.company}</Typography>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <GroupIcon sx={{ mr: 1 }} />
          <Typography variant="body1">{jobData.location}</Typography>
        </Box>
        {/* Add more job details here */}
      </CardContent>
    </Card>
  );
};

export default CandidateFullJobDetails;
