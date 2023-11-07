import { makeStyles } from '@mui/styles'
import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Banner />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
}))

export default Home