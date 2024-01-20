import React from 'react'
import MainBar from './MainBar';
import Sidebar1 from './Sidebar1';


const Profile = () => {
  return (
    <>
      <div className="d-flex">
        {/* <Sidebar/> */}
        <Sidebar1/>
         <MainBar/>
         
      </div>
    </>
  );
};

export default Profile;
