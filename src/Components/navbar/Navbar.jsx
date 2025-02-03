

import "../navbar/navbar.css";


import { useState } from "react";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="nav-box">
                <div className="logo">
                    <img
                        src="https://logos.textgiraffe.com/logos/logo-name/Lokesh-designstyle-smoothie-m.png"
                        alt="Logo"
                    />
                </div>
                <div className={`links ${isOpen ? "open" : ""}`}>
                    <a href="#home" onClick={toggleSidebar}>Home</a>
                    <a href="#about" onClick={toggleSidebar}>About</a>
                    <a href="#skills" onClick={toggleSidebar}>Skills</a>
                    <a href="#projects" onClick={toggleSidebar}>Projects</a>
                    <a href="https://drive.google.com/file/d/1vWW1Yo0P2HxZ97mYv-ypJLO_IUMBts4g/view?usp=drive_link"
                        style={{ textDecoration: "none", color: "black" }}
                        onClick={toggleSidebar}>Resume</a>
                    <a href="#contact" onClick={toggleSidebar}>Contact</a>
                </div>
                <div className="bar" onClick={toggleSidebar}>
                    <FaBars />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
