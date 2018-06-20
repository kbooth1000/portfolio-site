import React from 'react';
import './contentDispenser.css';

let ContentDispenser = ({label, content}) => {
  return (
    <div className="content-dispenser">
    <div className="dispenser-header">{label}</div> 
  {content}
  </div>
  )
}

export default ContentDispenser;