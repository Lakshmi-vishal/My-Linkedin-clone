import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const courseOffered = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      

      {courseOffered("How generous are India's uber rich?", "3d ago")}
      {courseOffered("Fears over Russia splitting Ukraine ", "2h ago . 915,191 readers")}
      {courseOffered("More jobs in engg, healthcare, telecom", "7h ago")}
      {courseOffered("Liquor brands in high spirits after 2 years ", "3d ago ")}
      {courseOffered("What Sweden consumers spend on... ", "7h ago")}

      <div className="widgets_body">
          <p>Promoted </p>
          <h5> Ad...</h5>
          <p>Develop new skills</p> &nbsp;
        
          <img src="LinkedIn_Learning_Logo.png"  alt=""  /> 
          

            <p>Millions of members use LinkedIn Learning. Unlock your free access today

            

            💻 Click here 
            </p>
  </div>
        
        </div>
        



  )
}
 
export default Widgets
