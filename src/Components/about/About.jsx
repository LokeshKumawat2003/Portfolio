import React from 'react';
import '../about/about.css';
import { FaUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlineAddIcCall } from "react-icons/md";

const About = () => {
    return (
        <div>
            <div className="heading">
                <h2>About Me</h2>
                <span>Introduction</span>
            </div>

            <div className="about-container">
                <div className="home-img-main">
                    <img className="home-img" src="https://themewagon.github.io/satner/img/banner/home-right.png" alt="coder gif" />
                </div>
                <div className="about-text" >
                    <p>
                        Aspiring full-stack web developer proficient in HTML, CSS, JavaScript, Express.js, and Node.js. 1000+ hour web development course at Masai School, gaining hands-on experience through individual and collaborative projects. Passionate about building efficient, scalable web applications and eager to apply my skills while continuously learning and growing in the field.
                    </p>
                    <div className="information">
                        <div className="info-box">
                            <h3> <FaUser /> Lokesh Chandra Kumawat</h3>
                        </div>

                        <div className="info-box info-call">
                            <MdOutlineAddIcCall /> <span id="contact-phone">+91 9549809524</span>
                        </div>

                        <div className="info-box info-gmail">
                            <MdEmail /> <span id="contact-email">lokeshkumawat288g@gmail.com</span>
                        </div>

                        <div className="info-box">
                            <a href="https://www.linkedin.com/in/lokeshkumawat07" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin /> lokeshkumawat07
                            </a>
                        </div>

                        <div className="info-box git-box-info">
                            <a href="https://github.com/LokeshKumawat2003" target="_blank" rel="noopener noreferrer">
                                <FaGithub /> LokeshKumawat2003
                            </a>
                        </div>

                        <a className="nav-link resume" id="resume-button"
                            href="https://drive.google.com/uc?id=1vWW1Yo0P2HxZ97mYv-ypJLO_IUMBts4g&export=download"
                            rel="noopener noreferrer"
                            download>
                            <button className="resume-button">Resume</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
