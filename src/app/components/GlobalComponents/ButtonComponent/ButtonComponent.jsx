import { Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { motion } from "framer-motion";

const ButtonComponent = ({title, onClick, sx, search}) => {
  return (
    <>
     <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
    <Button       
            
                  variant="contained"
                  sx={sx}
                  onClick = {onClick}
                >
                {search && (<SearchIcon />)} {title}
    </Button>
    </motion.div>
    </>
  )
}

export default ButtonComponent