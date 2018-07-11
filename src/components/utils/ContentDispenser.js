import React from 'react';
import './contentDispenser.css';

let ContentDispenser = ({label, content, addCss, cssClass}) => {
  return (
    <section style={addCss} className={cssClass} >
    <div className="content-dispenser" >
    <div className="dispenser-header">{label}</div> 
  {content}
  </div>
  </section>
  )
}

export default ContentDispenser;