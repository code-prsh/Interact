import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import RowingIcon from '@mui/icons-material/Rowing';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import StormIcon from '@mui/icons-material/Storm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar1 = () => {
  return (
    <div style={{width: '250px', height: '100vh'}}>
    <div  style={{width: '250px', height: '100vh',marginTop:'10px', position: "fixed",
             
             
             }}>
      <div className="logo" style={{padding: '30px 0px 40px 30px'}}><span style={{fontSize: '30px', fontFamily: "'Lobster', sans-serif"}}>Instagram</span></div>
      {/* <div style={{height: '200px'}}> */}
      
      <Stack spacing={2} direction="column" sx={{width: '150px', marginLeft: '20px', textAlign: 'left',  alignItems: 'start'}}>
      <Button variant="text"  sx={{color: 'black'}} startIcon={<HomeIcon />}>Home</Button>
      <Button variant="text"  sx={{color: 'black'}} startIcon={<SearchIcon />}> Search</Button>
      <Button variant="text"  sx={{color: 'black'}} startIcon={<ExploreIcon />}>Explore</Button>
      <Button variant="text" sx={{color: 'black'}} startIcon={<SlowMotionVideoIcon />}>Reels</Button>
      <Button variant="text" sx={{color: 'black'}} startIcon={<TelegramIcon />}>Messages</Button>
      <Button variant="text" sx={{color: 'black'}} startIcon={<FavoriteBorderIcon />}>Notifications</Button>
      <Button variant="text" sx={{color: 'black'}} startIcon={<AddCircleIcon />}>Create</Button>
      <Button variant="text" sx={{color: 'black'}} startIcon={<AccountCircleIcon />}>Profile</Button>
      <div className="dropdown">
        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
        <FontAwesomeIcon icon={faBars} style={{ marginRight: '10px', marginLeft: '-7px' }} />  More
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{backgroundColor: "#f3f3f3", borderRadius: '20px'}}>
        <Stack spacing={2} direction="column" sx={{width: '250px', marginLeft: '15px', textAlign: 'left',  alignItems: 'start'}}>
      <Button variant="text" sx={{color: 'black', fontFamily: 'inherit', fontWeight: '580'}} startIcon={<SettingsIcon />}>Settings</Button>
      <Button variant="text" sx={{color: 'black', fontFamily: 'inherit', fontWeight: '580'}} startIcon={<RowingIcon  />}>Your Activity</Button>
      <Button variant="text" sx={{color: 'black', fontFamily: 'inherit', fontWeight: '580'}} startIcon={<TurnedInNotIcon  />}>Saved</Button>
      <Button variant="text" sx={{color: 'black', fontFamily: 'inherit', fontWeight: '580'}} startIcon={<WbSunnyIcon  />}>Switch appearance</Button>
      <Button variant="text" sx={{color: 'black', fontFamily: 'inherit', fontWeight: '580'}} startIcon={<ReportProblemIcon />}>Report a problem</Button>
      <Button variant="text" sx={{color: 'black', fontFamily: 'inherit', fontWeight: '580', paddingBottom: '50px'}} startIcon={<StormIcon  />}>Threads</Button>
      <Button variant="text" sx={{color: 'black', fontFamily: 'inherit', fontWeight: '380'}} >Switch Accounts</Button>
      <Button variant="text" sx={{color: 'black', fontFamily: 'inherit', fontWeight: '380'}} >Logout</Button>
      
    </Stack>
          {/* <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li> */}
        </ul>
      </div>
    </Stack>
    </div>
    </div>
  )
}

export default Sidebar1
