import { makeStyles } from '@mui/styles'
import React from 'react'
import Header from '../components/Header';
import { Typography } from '@mui/material';
import avatar from '../images/netflixAvatar.png'
import Plans from '../components/Plans';
import { NetflixButton } from '../styled/StyledComponents';

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Typography variant='h3'>Edit Profile</Typography>
      <div className={classes.info}>
        <img src={avatar} alt="avatar" />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant='h6'>user email</Typography>
            <Typography className={classes.planText} variant='h5' gutterBottom>Plans</Typography>
            <Plans cost={7.99}>Netflix Standrad Plan</Plans>
            <Plans cost={11.99}>Netflix Basic Plan</Plans>
            <Plans cost={15.99}>Netflix Premium Plan</Plans>
            <NetflixButton>Sign Out</NetflixButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    minHeight: '100vh',
    width: '100vw',
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center'
  },
  info: {
    width: '40%',
    display: 'flex',
    '& img': {
      height: '100px',
      marginTop: 20,
    }
  },
  details: {
    width: '100%',
    marginLeft: 20,
    '& h6': {
      backgroundColor: '#aaa',
      padding: 5,
      marginBottom: 30,
      marginTop: 20,
      fontSize: '18px'
    },
  },
  plans: {
    width: '100%',
  },
  planText: {
    borderBottom: '1px solid lightgray'
  },
}))

export default Profile