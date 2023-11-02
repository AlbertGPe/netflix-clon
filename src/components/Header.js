import { AppBar, Avatar, IconButton, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import logo from "../images/netflix.png"
import { useNavigate } from 'react-router-dom';

function Header() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, [])

  return (
    <AppBar position='sticky' elevation={0} style={{background: "transparent"}}>
      <Toolbar className={`${classes.root} ${show && classes.transparent} ${classes.toolbar}`}>
        <IconButton onClick={() => navigate("/")}>
          <img src={logo} alt='logo' className={classes.logo} />
        </IconButton>
        <Avatar style={{ cursor: "pointer" }} onClick={() => navigate("/profile")} />
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#111",
  }, 
  transparent: {
    backgroundColor: "transparent"
  },
  toolbar: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
  },  
  logo: {
    width: "100px",
    cursor: "pointer",
  }
}))

export default Header