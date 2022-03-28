import React, { useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';

function Feed() {
  

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
            
          <CreateIcon />
          
          <form>
          
            <input placeholder="Start a post" type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOption">
               <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
               <InputOption Icon={SubscriptionsIcon} title="Video" color="#7E7A33E" />
               <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
               <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
           </div>
      </div>
      

       <Post  
       name="LinkedIn"
       description="21,659,224 followers" 
       message="Signal what you want to see on your feed, add your voice in a conversation by interacting with posts and follow hashtags that you're interested in to receive conversations around it." 
       photoUrl= {(<iframe width="630" height="471" src="LinkedIn on LinkedIn - How to personalise your LinkedIn feed _ 22 comments.mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)}
 
       
       />
       <Post name="LinkedIn" 
       description="21,659,224 followers" 
       message="“Professional to me means being able to express all of me— the ever shapeshifting, multiply curious, intersectionality alive me.”
       Storyteller + Speaker + Facilitator Jezz Chung (They/Them) is redefining what it means to be professional. Follow them to join the conversation: https://lnkd.in/gfFabxGu #IAmProfessional"
       photoUrl={(<img src='job.png' height = "400px" width = "600px" alt="" />)}
       
             
       />

        </div>
  );
};

export default Feed;
