import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
function Header() {
    return (
        <div className="Header">

          <div className="Header_left"> 
         < img src="174857.png" alt="" />

          
          <div className="Header_Search"> 
          <SearchIcon />
          <input type="text" placeholder="Search for jobs,peoples,posts..."/>
          
          </div>
          </div>
        
          <div className="Header_right"> 
            <HeaderOption Icon={HomeIcon}  title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon}  title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging" />           
            <HeaderOption Icon={NotificationsIcon}  title="Notifications"/>
            <HeaderOption avatar="1616590476744.jpg" title='Me▼' />
            <HeaderOption Icon={AppsIcon}  title="Work▼"/>

           </div>
        </div>
    );
}

export default Header;
