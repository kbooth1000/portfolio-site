import React from 'react';
import './contentDispenser.css';

let ContentDispenser = ({label, content, addCss}) => {
  return (
    <section style={addCss} >
    <div className="content-dispenser" >
    <div className="dispenser-header">{label}</div> 
  {content}
  </div>
  </section>
  )
}

export default ContentDispenser;