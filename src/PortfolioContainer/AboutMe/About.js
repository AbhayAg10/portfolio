import React from 'react';
import "./About.css";
// import profilePic from "../../assets/profilephoto1.jpg"
import Resume from "../../assets/Abhay_Agrawal_Resume.pdf";

export default function About() {
    
  return (
    <div className='about-container' id='About'>
        <div className='about-header'>
            <h3>About Me</h3>
            <p>Why Choose Me?</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="about-content-box">
            <div className="aboutCard">
                <div className="profilePic">
                    <img src="https://camo.githubusercontent.com/61491d59e71fec5c794945fed916a4a682b6c0404fc31f30b08a0d919c558404/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966" alt="" />
                </div>
                <div className="profile-content">
                    <div className="profilesummary">
                        Full Stack web developer with knowledge of MERN stack, along with building application with utmost efficiency. Strong professional to be an asset for an organization.
                    </div>
                    <div>
                        <h3>Here are a Few Highlights</h3>
                        <ul className='keyHighlights'>
                            <li>Full Stack web development</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>javaScript</li>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>MongoDB database</li>
                        </ul>
                    </div>
                    <div className="profile-optins resumeBtn">
                        <a href={Resume} download="Abhay_Agrawal_Resume.pdf">
                            <button className='resumeButton2'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
