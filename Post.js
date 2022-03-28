
import React from 'react';
import InputOption from './InputOption';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
function Post({name, description, message, photoUrl})
{
  return (
    <div className="post">
        <div className="post_header">
          <img src="l.png" alt="" />   
               <div className="postInfo">
            <h2>{name}</h2>
            <p>{description}</p>
            <h5> 2w •  🌐</h5>
          </div>
        </div>
        <div className="post_body">
        
          <p>{message}</p>
         
           {photoUrl }       
         
         
        </div>
        <div className="post_buttons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
          </div>
          
        </div>
    
  );
  }

export default Post;
