import { makeStyles } from '@mui/styles'
import logo from "../images/netflix.png"
import backgroundImg from "../images/netflixbG.jpg"
import { Button, Typography } from '@mui/material';
import { NetflixButton, NetflixInput } from '../styled/StyledComponents';

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />
      <NetflixButton style={{position: "fixed",
              zIndex: 15,
              right: 20,
              top: 20,}}>
              Login
      </NetflixButton>
      <div className={classes.info}>
        <Typography variant='h4' gutterBottom>
          Unlimited films, TV programmes and more
        </Typography>
        <Typography variant='h5'>
          Watch anywhere. Cancel at any time.
        </Typography>
        <Typography variant='h6' gutterBottom>
          Ready to watch ? Enter your email to create or restart your membership
        </Typography>
        <div className={classes.inputBlock}>
          <NetflixInput placeholder='Email address' />
          <NetflixButton>GET STARTED</NetflixButton>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "contain",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }, 
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer", 
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 700,
    },
    "& h5": {
      fontWeight: 400,
    },
  }
}))

export default Login