import { makeStyles } from '@mui/styles';
import React from 'react'
import bannerImage from '../images/Lupin+Part+2+banner.jpg'
import { Button, Typography } from '@mui/material';


function Banner() {
  const classes = useStyles();
  
  const truncate = (description, num) => description?.length > num ? `${description.substr(0, num - 1)} ...` : description;

  return (
    <div className={classes.root}>   
      <div className={classes.content}>
        <Typography variant='h2' component='h1'>
          Movie Title
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography variant='h6' className={classes.description}>
          {
            truncate("Description Description Description Description DescriptionDescriptionDescriptionDescription  Description Description Description Description", 50)
          }
        </Typography>
        <div className={classes.fadeBottom} 
          style={{position: "absolute", 
                  top: "30vh", 
                  bottom: 0, 
                  left: 0,
                  right: 0,
                  zIndex: 99,
                  backgroundImage: "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111",}} 
         /> 
      </div>   
    </div>
    
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bannerImage})`,
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff"
  },
  buttons: {
    "& button": {
      cursor: "pointer",
      color: "#fff",
      padding: "10px 40px",
      fontWeight: "700",
      borderRadius: "5px",
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51,0.5)"
    },
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    }
  }
}))

export default Banner