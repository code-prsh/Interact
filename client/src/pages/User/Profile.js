import React from 'react'
import MainBar from './MainBar';
import Sidebar from './Sidebar';

const Profile = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar/>
         <MainBar/>
         
      </div>
    </>
  );
};

export default Profile;
