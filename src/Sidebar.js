import React from 'react';
import "./Sidebar.css"
import { Avatar } from '@mui/material';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const recentItem = (topic) =>  (
    <div className="sidebar__recentItem">
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src='https://cdn.pixabay.com/photo/2024/12/28/03/39/vietnam-9295186_1280.jpg' alt=''/>
        <Avatar className='sidebar__avatar' />
        <h1>Shikha Tripathi</h1>
        <h4>shikhatripathi22101@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,343</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,643</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareEngineering')}
        {recentItem('design')}
        {recentItem('develop')}
      </div>
    </div>
  )
}

export default Sidebar;