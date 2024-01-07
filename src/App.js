import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Counter } from './features/counter/Counter';
//import {  } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Paypal from './pages/Paypal';
import Home from './pages/Home';


function App() {
  const user = 'a';
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login />) : (
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/checkout' element={<Paypal />} />
              <Route path='/' element={<Home />} />
            </Routes>
          )
        }
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111",
  }
}))

export default App;
