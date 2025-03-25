import { BusinessCenter, Group } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { myStudents } from "../../../../../../../service/operations/employeeApi";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, useTheme } from "@mui/material";

const Cards = () => {
    const theme = useTheme();
    const token = JSON.parse(localStorage.getItem("token"));
    const [jobsCount, setJobsCount] = useState([]);
    const employeeData = JSON.parse(localStorage.getItem('employee'));
    const employeeJobIds = employeeData?.jobs || [];
    const NumberOfJobs = JSON.parse(localStorage.getItem('employee'));
    const { jobId } = useParams();
    const jobsLength = NumberOfJobs.jobs;

    async function getCandidateNumber() {
        const response = await myStudents(token);
        if (response.students && response.students.length > 0) {
            const targetJobIds = jobId ? [jobId] : employeeJobIds;
            const filteredStudents = response.students.flatMap(studentGroup =>
                studentGroup.filter(student =>
                    student.jobs && student.jobs.some(job => targetJobIds.includes(job))
                )
            )
            setJobsCount(filteredStudents)
        }
    }

    useEffect(() => {
        getCandidateNumber();
    }, []);

    return (
        <Box sx={{
            padding:'20px',
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
            mb: 4
        }}>
            {/* Jobs Card */}
            <Card sx={{
                minWidth: 200,
                p: 3,
                borderRadius: 4,
                boxShadow: theme.shadows[4],
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[8]
                }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <BusinessCenter fontSize="medium" />
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            Total Jobs
                        </Typography>
                        <Typography variant="h4" fontWeight="bold">
                            {jobsLength.length}
                        </Typography>
                    </Box>
                </Box>
            </Card>

            {/* Candidates Card */}
            <Card sx={{
                minWidth: 200,
                p: 3,
                borderRadius: 4,
                boxShadow: theme.shadows[4],
                background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[8]
                }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.secondary.main,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Group fontSize="medium" />
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            Total Candidates
                        </Typography>
                        <Typography variant="h4" fontWeight="bold">
                            {jobsCount.length}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};

export default Cards;