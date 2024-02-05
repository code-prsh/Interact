import React from 'react'
import Sidebar from '../../../components/user/sidebar/Sidebar'
import RandomPost from './RandomPost'

const Home = () => {
  return (
    <div style= {{display: 'flex', flexDirection: 'row'}}>
      <Sidebar />
      <RandomPost />
    </div>
  )
}

export default Home
