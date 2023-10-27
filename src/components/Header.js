import { makeStyles } from '@mui/material'
import React from 'react'

function Header() {
  const classes = useStyles();
  return (
    <div>Header</div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default Header