import React from 'react'
import Sidebar from '../../components/user/sidebar/Sidebar'
import { Stack } from '@mui/material'
import HomeRight from './HomeRight'

const Home = () => {
  return (
    <div style= {{display: 'flex', flexDirection: 'row'}}>
      <Sidebar />
      <HomeRight />
    </div>
  )
}

export default Home
