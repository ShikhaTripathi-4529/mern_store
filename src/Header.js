import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderOption from "./HeaderOption";
import "./Header.css"
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';


function Header() {
  const dispatch = useDispatch();
  const logOutOfApp = () =>{
    dispatch(logout());
    // auth.dispatch();
  }
  return (
    <div className='header'>
        <div className="header__left">
          <LinkedInIcon style={{ fontSize: 40, color: '#0077B5' }} />
    <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder='Search' />
    </div> 
    </div>
  <div className="header__right">
    <HeaderOption Icon={HomeIcon} title="Home"/>
    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
    <HeaderOption Icon={WorkIcon} title="Jobs"/>
    <HeaderOption Icon={ChatIcon} title="Messaging"/>
    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
    <HeaderOption  avatar="https://cdn.prod.website-files.com/640af9a044ffd036837edf6a/66f140c9afedf327353dc93a_20191119-Coldplay-04-p-1080.webp"   title="me" onClick={logOutOfApp}/>
    </div>
    </div>
  )
}

export default Header;