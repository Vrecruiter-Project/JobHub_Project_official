import { Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { motion } from "framer-motion";

const ButtonComponent = ({ title, onClick, sx, search }) => {
  return (
    <>
      <motion.div

      >
        <Button
          sx={sx}
          onClick={onClick}
        >
          {search && (<SearchIcon />)} {title}
        </Button>
      </motion.div>
    </>
  )
}

export default ButtonComponent