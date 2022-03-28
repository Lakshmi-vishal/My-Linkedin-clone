import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';

function Sidebar() {
        
      
        const recentItems = (topic) => (
          <div className="SideBar_recentItems">
            <span className="SideBar_hash"><img src="Picture1.png" /></span>
            <p>{topic}</p>
          </div>
        );
      

    return (
        <div className="SideBar">
            <div className="SideBar_top">
                <img src="1616567494290.jpg" alt="" />
                <Avatar className="Sidebar_avatar" src="1616590476744.jpg"></Avatar>
                <h2>Lakshmi V Hayagrivan</h2>
                <h4>Creative Entry level Web developer. knowledgeable in wide variety of computer languages as well as website development</h4>
            </div>
            <div className="SideBar_stats">
                 <div className="SideBar_stat">
                  <p>Who viewed your profile</p>
                  <p className="SideBar_classnumber">
                      6
                  </p>
                </div> 
                <div className="SideBar_stat">
                <p>Views of your post</p>
                  <p className="SideBar_classnumber">
                      48
                  </p>
                </div>
                
                                
            </div>
            <div className="a">
                 <p>Access exclusive tools & insights
                     <br/><b> 🟨  Get Hired Faster,
                          Try Premium Free</b>
                 </p>
  
                 </div>
                 <div className="b">
                   <p id="b2"><img src="bookmarks.png"></img> <b> My items</b></p>          
                 </div>

            <div className="SideBar_bottom">
                <p>Recent</p>

                 
                 {recentItems("Software & Technology Profession")}
                 {recentItems('Design Thinking')}
                 {recentItems('machine learning')}
                 {recentItems('job interviews')}
                 {recentItems('inspirationallleaders')}
            </div>
            <div className="SideBar_End">
                <p>Groups</p>
                 {recentItems("Software & Technology Profession")}
                 {recentItems('Design Thinking')}
                 {recentItems('Future trends')}
                <h5 className="displayIcon" >Show more ⮟</h5>
                <p>Events</p>

                <p>Followed Hashtags</p>
                {recentItems("machine learning")}
                 {recentItems('job interviews')}
                 {recentItems('inspirationalleaders')}
                <h5 className="displayIcon" >Show more ⮟</h5>

            </div>

                <div className="SideBar_footer">
                    <p>Discover more</p>
                    </div> 
        </div>
    )
}

export default Sidebar
