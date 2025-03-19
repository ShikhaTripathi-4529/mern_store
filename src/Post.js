import React, { useState } from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';

function Post({ name,description,message,photoUrl }) {
  return (
    <div className='post'>
     <div className="post__header">
        <Avatar/>
        <div className='post__info'>
        <h2>{name}</h2>
        <p>{description}</p>
        </div>
     </div>
     <div className='post__body'>
        <p>{message}</p>
     </div>
     <div className="post__buttons">
      <InputOption Icon={ThumbUpAltIcon} title="Like" color="grey"/>
      <InputOption Icon={ChatIcon} title="Comment" color="grey"/>
      <InputOption Icon={ShareIcon} title="Share" color="grey"/>
      <InputOption Icon={SendIcon} title="Send" color="grey"/>
     </div>
    </div>
  )
}

export default Post;