import React from 'react'
import { Box,} from '@mui/material';
import ButtonComponent from '../../../../../../components/GlobalComponents/ButtonComponent/ButtonComponent';
import { useNavigate } from 'react-router-dom';

const PostCard = ({onClick}) => {
    const navigate = useNavigate();
  return (
    <>
        <Box sx={{
                display:"flex",
                justifyContent: "flex-end",
                width : "100%",
                mt: 2
              }}>
              <ButtonComponent
                  title="Create a New Job Post"
                  onClick={() => navigate("/employerdashboard/jobpostdetailsform")}
                  sx={{
                    // my: 3,
                    px: { lg: 4 },
                    color: 'white',
                    display: 'block',
                    py: 1,
                    border: '1px solid #34A853',
                    background: "green",
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:active': {
                      transform: 'scale(0.95)',
                    },
                  }}
              />
              <ButtonComponent
                  title="Delete Job"
                  onClick={onClick}
                  sx={{
                    // my: 3,
                    mx: {xs: 2, lg: 2},
                    px: { lg: 2 },
                    color: 'white',
                    display: 'block',
                    py: 1,
                    border: '1px solid #34A853',
                    background: "green",
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:active': {
                      transform: 'scale(0.95)',
                    },
                  }}
                />
          </Box>
    </>
  )
}

export default PostCard