import React from 'react'
import Typical from 'react-typical';
import "./Profile.css";
import Resume from "../../../assets/Abhay_Agrawal_Resume.pdf";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://github.com/AbhayAg10" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/feed/" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>    
                        <a href="mailto: abhaytalkin@gmail.com"  target="blank">
                        <i className="fa fa-google" aria-hidden="true"></i>
                        </a>
                        <a href="tel:+917415630406" target="_blank">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello I'm <span className='highlighted-text'>Abhay Agrawal</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                        <Typical
                            loop={Infinity}
                            steps ={[
                                "Welcome to My Portfolio 🚀",
                                1500,
                                "Full Stack Web Developer 🖥",
                                1500,   
                            ]}
                        />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building application with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <a href={Resume} target="_blank" download="Abhay_Agrawal_Resume" >
                        <button className='resumeButton'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
