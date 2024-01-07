import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { NetflixButton } from '../styled/StyledComponents';

function Plans({ cost, children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.standard} variant='h5'>
        {children}
      </Typography>
      <NetflixButton>Subscribe</NetflixButton>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& button': {
      marginBottom: 15
    }
  }
}))

export default Plans