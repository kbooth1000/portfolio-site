import React from 'react';
import { Link } from 'react-router-dom';
import { setHeaderClass} from '../actions/actions';
import { connect } from 'react-redux';


let About = (props) => {

  let handleClick = (projectkey) => {
    props.setMainClass(projectkey);
 }

  return (
    <div style={{ width:"80%", textAlign:"center", maxWidth:"750px" }}>
    <p>
    Hello, my name is Kyle Booth. I am an Atlanta-based web developer and designer working with mostly JavaScript-based front and backend technologies (and some PHP for Wordpress theme development). 
    </p><p>
    I've been working with JavaScript, HTML and CSS for over 10 years and recently graduated from a super-intense full-time coding bootcamp (<a href="https://www.digitalcrafts.com/immersive-web.html" target="_new">Digital Crafts full-time immersive</a>), where I ramped up my ES6, React, Node, et al skills.
    </p><p>
    Now, as I continue to dig deeper into these awesome technologies, I'm looking for a company to work with where I can help them build great stuff!
    </p><p>
      When I'm not coding, I love exploring the city and being out around people. From the Beltline to Buford Highway and from the West End to the International Farmers' Market, there's always something cool to discover.
      </p><p>
        If you'd like to <Link to="/contact" onClick={()=>handleClick('content-page contact')} style={{borderBottom:"2px #dfdfdf solid"}}>get in touch with me</Link>, I'd love to hear from you.
      </p>
    </div>
  )
}

let mapDispatchToProps = {
  setMainClass: setHeaderClass
};

let mapStateToProps = state => {
  return {
    headerClass: state.layout.headerClass
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);