import React from 'react'
import Sidebar from '../../../components/user/sidebar/Sidebar'
import { Stack } from '@mui/material'
import HomeRight from './HomeRight'
import Explore from '../explore/Explore'

const Home = () => {
  return (
    <div style= {{display: 'flex', flexDirection: 'row'}}>
      <Sidebar />
      <HomeRight />
    </div>
  )
}

export default Home
