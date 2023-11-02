import { makeStyles } from '@mui/styles'
import React from 'react'
import Header from '../components/Header';

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
}))

export default Home