import React, { useState, useEffect } from 'react';
import './Project.css';
import Buffer from '../../assets/Buffer.png';
import maxfashion from '../../assets/MaxFashion.png';
import Kimaye from '../../assets/Kimaye.png';
// import hibernateImg from '../../assets/hibernate.svg';
// import javaImg from '../../assets/java-icon.svg';
// import springImg from '../../assets/spring.png';
// import mySqlImg from '../../assets/MySQL.png';
// import postmanImg from '../../assets/postman.svg';
import {AiOutlineGithub} from 'react-icons/ai';
import {TbExternalLink} from 'react-icons/tb';
import html5 from '../../assets/icons8-html-5-144.png';
import css3 from '../../assets/icons8-css3-144.png';
import js from '../../assets/icons8-javascript-144.png';
import Reactlogo from '../../assets/reactlogo.png';

export default function Project() {
    // const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     setCounter(counter + 1);
    //     }, 1000);

    //     return() => {
    //         clearInterval(interval);
    //     };
    // });

  return (
    <div className='project-container' id='Projects'>
    <div className='project-header'>
        <h3>Projects</h3>
        <p>Tech Stack and Projects</p>
        <span className='header-underline'>
            <span className='header-underline1'></span>
        </span>
    </div>

    <div className="projectDetails">
        <div className="projectCard">

        {/* card 1 */}
        <div className="project-card">
            <img src={Kimaye} alt="" />
            <div className='card-body'>
                <div class="badge">Frontend</div>
                <div className='projectName'>Kimaye Clone</div>
                <div className='techStack'>
                    <img src={js}/>
                    <img src={html5}/>
                    <img src={css3}/>
                </div>
                <div className="contentProject">
                    Kimaye is a fruits e-commerce website. We can order fruits and gift baskets of fruits from this website. It was a collaborative project, We executed this project in 5 days with a team of 6 members.In this project My contribution was to build CartPage and Our Story Page.
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/humamul/Team-Kimayi" target='_blank'><AiOutlineGithub /> GitHub</a>
                    <a className='projectbtn2' href="https://darling-moonbeam-a94580.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>
        {/* card 2 */}
        <div className="project-card">
            <img src={Buffer} alt="" />
            <div className='card-body'>
                <div class="badge">Frontend</div>
                <div className='projectName'>Buffer clone</div>
                <div className='techStack'>
                    <img src={Reactlogo}/>
                    <img src={js}/>
                    <img src={html5}/>
                    <img src={css3}/>
                </div>
                <div className="contentProject">
                   Buffer is a website which helps their customers and clients to build their brands and grow their businesses on social media.
                   I worked on building this project solely with time constraint of 4 days and i built Dashboard,Login and Signup page.
                </div>
                <div className='projectLinks'>
                    <a className='projectbtn1' href="https://github.com/AbhayAg10/Buffer-Website-Clone/tree/main/rct101-project-buffer" target='_blank'><AiOutlineGithub /> GitHub</a>
                    <a className='projectbtn2' href="https://rct101-project-buffer.vercel.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>


        {/* card 3 */}
        <div className="project-card">
            <img src={maxfashion} alt="" />
            <div className='card-body'>
                <div class="badge">Frontend</div>
                <div className='projectName'>MaxFashion clone</div>
                <div className='techStack'>
                    <img src={html5}/>
                    <img src={css3}/>
                    <img src={js}/>
                </div>
                <div className="contentProject">
                    Max Fashion is a clothing e-commerce website. We can order Cloths of all variety for every one. It was a collaborative project, We executed this project in 5 days with a team of 5 members.In this project My contribution was to build  Women's Page, WomensProductsPage with filtering and Sorting.
                </div>
                <div className='projectLinks'>
                <a className='projectbtn1' href="https://github.com/bansalharshit/Unit-3-Project---Max-fashion-/tree/main/final%20data%20of%20harshit" target='_blank'><AiOutlineGithub/> GitHub</a>
                    <a className='projectbtn2' href="https://hilarious-klepon-f7ca3b.netlify.app/" target='_blank'>Demo <TbExternalLink/></a>
                </div>
            </div>
        </div>



        {/* <div className="project-card">
            
        </div>
        <div className="project-card">
            hello
        </div> */}
        </div>
    </div>
</div>
  )
}
