import React from 'react'
import './Skills.css'
import  {GiSkills} from 'react-icons/gi';
import  {ImHtmlFive, ImDatabase} from 'react-icons/im';
import  {RiGitBranchLine} from 'react-icons/ri'
import mongoicon from "../../assets/mongodb.png"; 
import react from "../../assets/reactlogo.png"; 
import node from "../../assets/nodejs.png"; 

export default function Skills() {
  return (
    <div className='skills-container' id='Skills'>
        <div className='skills-header'>
            <h3>Skills</h3>
            <p>Hands On Experience</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>
        <div className="skillsDetails">
            <div className="boxContainer">
                <div className='skillBox skillbox1'>
                    <div className='sillIcon'><ImHtmlFive color='red'/></div>
                    <div className='skillTitle'>Web Technologies</div>
                    <div className='skillInfo'>HTML, CSS, JavaScript</div>
                </div>
                <div className='skillBox skillbox2'>
                    <div className='sillIcon'><img src={node} alt='' /></div>
                    <div className='skillTitle'>NodeJS</div>
                    <div className='skillInfo'>NodeJS, ExpressJS</div>
                </div>
                <div className='skillBox skillbox3'>
                    <div className='sillIcon'><img src={react} alt='' /></div>
                    <div className='skillTitle'>ReactJS</div>
                    <div className='skillInfo'>React and Redux</div> 
                </div>
                <div className='skillBox skillbox4'>
                    <div className='sillIcon'>
                        <img src={mongoicon} alt='' />
                    </div>
                    <div className='skillTitle'>DATABASE</div>
                    <div className='skillInfo'>MongoDB</div> 
                </div>
                <div className='skillBox skillbox5'>
                    <div className='sillIcon'><GiSkills color='rgb(109, 152, 0)'/></div>
                    <div className='skillTitle'>Soft Skills</div>
                    <div className='skillInfo'>Observation, Decision Making, Communication, Patience</div> 
                </div>
                <div className='skillBox skillbox6'>
                    <div className='sillIcon'>
                    <RiGitBranchLine color='blue'/>
                    </div>
                    <div className='skillTitle'>Code Version Control</div>
                    <div className='skillInfo'>GitHub, Git</div>
                </div>
            </div>
        </div>
    </div>
  )
}
