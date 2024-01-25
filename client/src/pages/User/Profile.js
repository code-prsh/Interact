import React from 'react'
// import MainBar from './MainBar';
import Sidebar1 from './Sidebar1';
import Your_Activity from './Your_Activity';
import Footer from './Footer';


const Profile = () => {
  return (
    <>
      <div className="d-flex">
        {/* <Sidebar/> */}
        <Sidebar1/>
        <div>
        <Your_Activity/>
         {/* <MainBar/> */}
         
         </div>
         
      </div>
    </>
  );
};

export default Profile;
