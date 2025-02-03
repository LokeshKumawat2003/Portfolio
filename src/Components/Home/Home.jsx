import React from 'react'
import '../Home/Home.css'
const Home = () => {

    return (
        <div>
            <div className="about-box">
                <div className="about-info">
                    <p>  Hello👋, I'm  </p>
                    <p className="name"> Lokesh Kumawat</p>
                    <p> Full-Stack Developer</p>
                    <div className="about-btn">
                        <button>  <a href="https://drive.google.com/file/d/1vWW1Yo0P2HxZ97mYv-ypJLO_IUMBts4g/view?usp=drive_link" style={{ textDecoration: "none", color: "white" }}> Get Resume </a>   </button>
                    </div>
                </div>
                <div className="about-image">
                    <div className="about-logo">
                        <img src='pt3.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
