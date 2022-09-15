import React from 'react'
import './Footer.css';
import {ImHeart} from 'react-icons/im';
export default function Footer() {
    let date = new Date().getFullYear();
  return (
    <footer className="site-footer">
        <div className="container-footer">
                <div className="">
                    <div className=" footer-toop">
                        <h3 id='NameFooter'>ABHAY AGRAWAL</h3>
                        <p>
                            Aspiring Full Stack Web Developer with a passion for
                            developing scalable web applications and working
                            across the full stack using various tools like HTML, CSS,
                            Javascript, React, Redux and Node.js. Always looking to
                            enhance my knowledge by working and experiencing
                            various hurdles coming my way. looking to continue
                            growing my skillset and keep contributing to the
                            betterment of the community.
                        </p>
                        <div className='footer-social'>
                        <a href="https://github.com/AbhayAg10" target="_blank">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/feed/" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>    
                        <a href="mailto:abhaytalkin@gmail.com"  target="blank">
                        <i className="fa fa-google" aria-hidden="true"></i>
                        </a>
                        <a href="tel:+917415630406" target="_blank">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-footer-text">
                <p>©{date}. Designed with {<ImHeart color='red'/>} by Abhay</p>
            </div>
    </footer>
  )
}
