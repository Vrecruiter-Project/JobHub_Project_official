import { useEffect, useState } from "react";
import { Typography, Card, CardContent } from "@mui/material";
import {
  BusinessCenter,
  CurrencyRupee,
  LocationOn,
  Person,
  Timelapse,
} from "@mui/icons-material";

const CandidateFullJobDetails = ({ jobId, jobsData }) => {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    if (jobId && jobsData) {
      const selectedJob = jobsData.find((job) => job._id === jobId);
      setJobData(selectedJob || null);
    }
  }, [jobId, jobsData]);

  if (!jobData) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 3, color: "gray" }}>
        No Job Details Available.
      </Typography>
    );
  }
  return (
    <>
      <Card sx={{ marginTop: "2px" , maxHeight: "90vh", overflow: "auto"}}>
        <CardContent>
          <div className="text-4xl font-bold">{jobData.companyName}</div>
          <div className="flex justify-between text-1xl text-gray-500">
            {jobData.jobLocation} | {jobData.workType} | {jobData.jobType}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <BusinessCenter
                sx={{ marginRight: "5px", color: "lightgreen" }}
              />
              <span className="font-bold mr-1">Role: </span>
              {jobData.jobRole}
            </div>
            {/* <div className="flex items-center">
              <LocationOn sx={{ marginRight: "5px", color: "lightgreen" }} />
              <span className="font-bold">Location: </span>
              {jobData.jobLocation}
            </div> */}

            <div className="flex items-center">
              <CurrencyRupee sx={{ marginRight: "5px", color: "lightgreen" }} />
              <span className="font-bold mr-1">Salary: </span>
              {jobData.salary}/month
            </div>
            <div className="flex items-center">
              <Timelapse sx={{ marginRight: "5px", color: "lightgreen" }} />
              <span className="font-bold mr-1">Shift: </span>Morning/Night
            </div>

            <div className="flex items-center">
              <Person sx={{ marginRight: "5px", color: "lightgreen" }} />
              <span className="font-bold mr-1">Age: </span>
              {jobData.age}yr
            </div>
          </div>
          <div className="mt-5">
            <div className="text-2xl font-bold">Job Description</div>
            <div className="mt-2">{jobData.description}</div>
          </div>
          <div>
            <div className="flex justify-between mt-5 border-b-2 pb-1">
              <div>Requirements</div>
              <div>Detials</div>
            </div>
            <div className="flex justify-between mt-5 border-b-2 pb-1">
              <div>Interview Mode</div>
              <div>{jobData.interviewMode}</div>
            </div>
            <div className="flex justify-between mt-5 border-b-2 pb-1">
              <div>Experience</div>
              <div>{jobData.experience}</div>
            </div>
            <div className="flex justify-between mt-5 border-b-2 pb-1">
              <div>Education</div>
              <div>{jobData.education}</div>
            </div>
            <div className="flex justify-between mt-5 border-b-2 pb-1">
              <div>English Level</div>
              <div>{jobData.english}</div>
            </div>
            <div className="flex justify-between mt-5 border-b-2 pb-1">
              <div>Gender</div>
              <div>{jobData.gender}</div>
            </div>
            <div className="flex justify-between mt-5 border-b-2 pb-1">
              <div>Benifits</div>
              <div>
                {jobData.benefits.map((item, index) => (
                  <span key={index}>{`${item}, `}</span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CandidateFullJobDetails;
