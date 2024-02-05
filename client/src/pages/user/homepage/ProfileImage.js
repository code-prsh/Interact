import React from 'react'

import { faker } from '@faker-js/faker';
import logo from '../../../assets/Images/story.jpg'
// import Avatar from 'react-avatar';

const ProfileImage = (props) => {
  return (
      <div style={{display: 'flex', flexDirection: 'column'}}> 
        <img src={faker.image.avatar()} alt="" style={{ height: `${props.size}`, width: `${props.size}`, border:"3px solid #ff1a00", borderRadius: '50%',  padding: '2px' }}/>
        </div>
  )
}

export default ProfileImage
