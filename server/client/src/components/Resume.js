import React from 'react';
import { Link } from 'react-router-dom';
import './css/project.css';
import { setHeaderClass } from '../actions/actions';
import './css/resume.css';

let onClickHandler = (fn,cl) => fn(cl);

export default (props) => {
  return (
   <div className="Resume">
   <Link onClick to="/">  <i className="far fa-arrow-alt-circle-left fa-sm"></i>&nbsp;
         <span>back</span>
        </Link>
     <h1>
       <b>Kyle Booth</b> Full-Stack Web Developer</h1>
     <div id="links">
       <ul>
         <li>
           <span className="label">location</span>:
           <span className="text">Atlanta</span>
         </li>
         <li>
           <span className="label">mobile</span>:
           <span className="text"><a href="tel:404-488-8721">404-488-8721</a></span>
         </li>
         <li>
           <span className="label">email</span>:
           <span className="text"><a href="/contact">kjbooth1000@gmail.com</a></span>
         </li>
         <li>
           <span className="label">portfolio</span>:
           <span className="text">
             <a href="http://kylebooth.com">kylebooth.com</a>
           </span>
         </li>
         <li>
           <span className="label">linkedin</span>:
           <span className="text"><a href="https://www.linkedin.com/in/kylejbooth/">kylejbooth</a></span>
         </li>
         <li>
           <span className="label">github</span>:
           <span className="text"><a href="https://github.com/kbooth1000/">kbooth1000</a></span>
         </li>
       </ul>
     </div>
     <div id="skills">
       <h2>Skills:</h2>
       <ul>
         <li className="skill">React/Redux</li>
         <li className="skill">JavaScript</li>
         <li className="skill">Node.js</li>
         <li className="skill">PostgreSQL</li>
         <li className="skill">MongoDB</li>
         <li className="skill">Express</li>
         <li className="skill">Wordpress</li>
         <li className="skill">Git/Github</li>
         <li className="skill">HTML5/CSS3</li>
         <li className="skill">Responsive web design</li>
         <li className="skill">Photoshop</li>
         <li className="skill">Illustrator</li>
         <li className="skill">Writing</li>
       </ul>
     </div>
     <div id="experience-container">
       <h2 className="experience-header">Relevant Experience:</h2>
       <section className="experience-columns">
         <div className="column">
           <div className="experience">
             <h3>
               <span className="company">Digital Crafts Coding Bootcamp</span> --
               <span className="location">Atlanta, GA</span>
             </h3>
             <h3 className="description">16-week immersive full-time accelerated learning program</h3>
             <p>
               <span className="dates">January-May 2018</span>
               <br />
             </p><ul className="highlights">
               <li>Learned Full-Stack JavaScript, including React/ Redux, Node.js, Express, HTML/CSS, PostgreSQL Recent projects
                 include:
                 <ul>
                   <li>Digicaching: A virtual geocaching app that lets users collect, combine, and cache digital treasures to complete
                     collections https://github.com/BGamber/digicaching</li>
                   <li>Foodstash: A platform for storing, sharing, and iterating on recipes https://github.com/rcackerley/foodstash</li>
                   <li>Town Square: A video-only discussion thread forum https://github.com/janelleany/Town-Square</li>
                 </ul>
               </li>
             </ul>
             <p />
           </div>
           <div className="experience">
             <h3>
               <span className="company">Freelance Web Designer/Front-End Developer</span> --
             </h3>
             <p>
               <span className="dates">2013-present</span>
               <br />
             </p><ul className="highlights">
               <li>Design and build custom websites, mostly on WordPress (see boothwebproduction.com). Recent projects include:
                 <ul>
                   <li>Dark Horse Woodworks</li>
                   <li>DimensionWorks Inc.</li>
                   <li>The Naked Crepe</li>
                   <li>Headlight Logic</li>
                 </ul>
               </li>
             </ul>
             <p />
           </div>
           <div className="experience">
             <h3>
               <span className="company">Anderson Press Inc.</span> --
               <span className="location">Atlanta, GA</span>
             </h3>
             <h3 className="job-title">Web Designer/Front-End Developer</h3>
             <p>
               <span className="dates">April 2006-May 2013</span>
             </p><ul className="highlights">
               <li>Worked with an awesome team of designers and coders, coding and designing websites, applications and interactive
                 features for all the company’s properties, including:
                 <ul>
                   <li>Whitman Publishing and Whitman Expos</li>
                   <li>Dalmatian and Piggytoes Press (children’s books)</li>
                   <li>Burnes of Boston (home decor)</li>
                   <li>Stacks (auctioneer)</li>
                 </ul>
               </li>
             </ul>
             <p />
           </div>
         </div>
         <div className="column">
           <div className="experience">
             <h3>
               <span className="company">Standard-Examiner </span> --
               <span className="location">Ogden, UT</span>
             </h3>
             <h3 className="job-title">Online Managing News Editor</h3>
             <p>
               <span className="dates">June 2003-January 2006</span>
               <br />
             </p><ul className="highlights">
               <li>Responsible for daily publication of the newspaper’s website (html and pdf editions) </li>
               <li>Produced original audio, video and photo news features, including interactive web animations, etc.</li>
             </ul>
             <p />
           </div>
           <div className="experience">
             <h3>
               <span className="company">New York State Society of CPAs</span> --
               <span className="location">New York City</span>
             </h3>
             <h3 className="job-title">Website Managing Editor</h3>
             <p>
               <span className="dates">February 2000-March 2001</span>
               <br />
             </p><ul className="highlights">
               <li>Responsible for all aspects of the website, including content, design and maintenance</li>
               <li>Managed a small team of web editors, designers and writers and collaborated regularly with other departments
                 on web projects
               </li>
               <li>Published a weekly HTML-based e-mail newsletter for delivery to our subscribers Wrote daily news articles for
                 the site
               </li>
             </ul>
             <p />
           </div>
         </div>
       </section>
     </div>
   </div>
  )
}
