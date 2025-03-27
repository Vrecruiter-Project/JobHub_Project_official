import React, { useEffect, useState } from "react";
import { Box, Typography, Divider, Card, CardContent } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { ApartmentRounded, Business, BusinessCenter, BusinessOutlined, BusinessSharp, CastForEducation, CurrencyRupee, LanguageTwoTone, LightMode, LockClockOutlined, People, Person, Person2, Person2Outlined, PrecisionManufacturing, RollerShadesClosed, Timelapse } from "@mui/icons-material";
// import GroupIcon from "@mui/icons-material/Group";

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
    <Card sx={{ mt: 3, p: 2 , wdith: '100%'}}>
      <CardContent>
        <div className='root1'>
          <div className="contPart">
            <div className='apart'>
              <WorkOutlineIcon sx={{ width: '50px', height: '50px', }} />
              <h3>{jobData.jobTitle}</h3>
            </div>
            <div>{jobData.companyName}</div>
          </div>
          <div className='location'>
            <div className='location'>
              <Business sx={{ width: '20px', height: '20px' }} />
              {jobData.jobLocation}
            </div>
            <div className='currn'>
              <CurrencyRupee sx={{ width: '20px', height: '20px' }} />
              {jobData.salary} monthly
            </div>
          </div>
          <div className='workType'>
            <div>
              <BusinessOutlined sx={{ width: '18px' }} /> {jobData.workType}
            </div>
            <div>
              <LockClockOutlined sx={{ width: '18px' }} /> {jobData.jobType}
            </div>
            <div>
              <BusinessCenter sx={{ width: '18px' }} /> {jobData.experience}
            </div>
            <div>
              <LanguageTwoTone sx={{ width: '18px' }} /> {jobData.english}
            </div>
          </div>
          <div className='jobHighlight'>
            Job highlights
            <div className='avia-1'>
              <People /> {jobData.numberOfPosition} Candidates
              <div className='interviwe'>
                InterviewMode:
                <div className='mode'>{jobData.interviewMode}</div>
              </div>
            </div>
            <div>
              <h3 className='benifits'>Benefits</h3>
              <div className='datBeni'>
                {jobData.benefits.map((item, index) => (
                  <div className='intemList' key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>
          <div className='jobDesc'>
            <span className='jobdec'>Job Description</span>
            <br />
            {jobData.description}
          </div>
          <h2 className='TextJob'>Job Role</h2>
          <div className='jobRoleCont'>
            <div className='part-1'>
              <div className='wLocation'>
                <div><BusinessOutlined /></div>
                <div className='timer'>
                  <span>Work Location</span>
                  <span>{jobData.jobLocation}</span>
                </div>
              </div>
              <div className='wLocation'>
                <div><RollerShadesClosed /></div>
                <div className='timer'>
                  <span>Role / Category</span>
                  <span>{jobData.jobRole}</span>
                </div>
              </div>
              <div className='wLocation'>
                <div><LightMode /></div>
                <div className='timer'>
                  <span>Shift</span>
                  <span>Morning / Night</span>
                </div>
              </div>
            </div>
            <div className='part-1'>
              <div className='wLocation'>
                <div><PrecisionManufacturing /></div>
                <div className='timer'>
                  <span>Department</span>
                  <span>{jobData.jobTitle}</span>
                </div>
              </div>
              <div className='wLocation'>
                <div><Timelapse /></div>
                <div className='timer'>
                  <span>Employment type</span>
                  <span>{jobData.jobType}</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className='TextJob'>Job Requirement</h2>
          <div className='JobRequire'>
            <div className='part-1'>
              <div className='wLocation'>
                <div><Person2Outlined /></div>
                <div className='timer'>
                  <span>Age</span>
                  <span>{jobData.age}</span>
                </div>
              </div>
              <div className='wLocation'>
                <div><BusinessCenter /></div>
                <div className='timer'>
                  <span>Experience</span>
                  <span>{jobData.experience}</span>
                </div>
              </div>
              <div className='wLocation'>
                <div><LanguageTwoTone /></div>
                <div className='timer'>
                  <span>English level</span>
                  <span>{jobData.english}</span>
                </div>
              </div>
            </div>
            <div className='part-1'>
              <div className='wLocation'>
                <div><CastForEducation /></div>
                <div className='timer'>
                  <span>Education</span>
                  <span>{jobData.education}</span>
                </div>
              </div>
              <div className='wLocation'>
                <div><Person /></div>
                <div className='timer'>
                  <span>Gender</span>
                  <span>{jobData.gender}</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className='TextJob'>About Company</h2>
          <div>
            <div className='part-1'>
              <div className='wLocation'>
                <div><BusinessSharp /></div>
                <div className='timer'>
                  <span>Name</span>
                  <span>{jobData.companyName}</span>
                </div>
              </div>
              <div className='wLocation'>
                <div><ApartmentRounded /></div>
                <div className='timer'>
                  <span>Address</span>
                  <span>{jobData.jobLocation}</span>
                </div>
              </div>
            </div>
            <div className='part-1'></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateFullJobDetails;