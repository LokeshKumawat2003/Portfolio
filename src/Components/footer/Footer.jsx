import React from 'react';
import '../footer/footer.css';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <div>


            <div className="footer2">
                <div className="h1">Contact Us</div>
            </div>

            <div className="contact-box">
                <div className="cotact-box1-info">
                    <div className="addres">
                        <IoLocationOutline />
                        <div className="addres-info">
                            <p >Address</p>
                            <p className='address'>Rajsamand, Rajasthan, India</p>
                        </div>
                    </div>
                    <div className="call">
                        <MdOutlineAddIcCall />
                        <div className="call-info">
                            <p>Call</p>
                            <a href="tel:+919549809524">
                                +91 9549809524
                            </a>
                        </div>
                    </div>
                    <div className="email">
                        <MdEmail />
                        <div className="email-info">
                            <p>Email </p>
                            <a href="mailto:lokeshkumawat288g@gmail.com">
                                lokeshkumawat288g@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="email">
                        <FaGithub />
                        <div className="email-info">
                            <p>Github </p>
                            <a href="https://github.com/LokeshKumawat2003">
                                LokeshKumawat2003
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-box2">
                    <h2>Send a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

            </div>










        </div>
    );
};

export default Footer;   