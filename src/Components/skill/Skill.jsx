import React from 'react';
import '../skill/skill.css';

const Skill = () => {
    const skills = [
        { name: "HTML5", image: "https://th.bing.com/th/id/OIP.ZNgBDR2Q1oaKnn07xaNG4wAAAA?pid=ImgDet&w=100&h=102&rs=1" },
        { name: "CSS3", image: "https://th.bing.com/th/id/OIP.AOg9QcyeZGiVUE3ew2PBvAAAAA?pid=ImgDet&w=100&h=100&rs=1" },
        { name: "JavaScript", image: "https://th.bing.com/th/id/OIP.Bc06hywVxgK6Mlq1DUsEaQHaHa?pid=ImgDet&w=90&h=100&rs=1" },
        { name: "React", image: "https://engineering.grab.com/img/grabs-front-end-study-guide/react-logo.svg" },
        { name: "Redux", image: "https://th.bing.com/th/id/OIP.yvi6B33dh1qkOz22drdl5wHaHe?pid=ImgDet&w=100&h=100&rs=1" },
        { name: "Node.js", image: "https://th.bing.com/th/id/OIP.RW-y02a3rajC1QzQLKXAuwAAAA?pid=ImgDet&w=100&h=100&rs=1" },
        { name: "MongoDB", image: "https://th.bing.com/th/id/OIP.1uP8wuxZmaKxVYrq1GpXeAAAAA?pid=ImgDet&w=100&h=100&rs=1" },
        { name: "Express", image: "https://avatars0.githubusercontent.com/u/5658226?s=280&v=4" },
        { name: "GitHub", image: "https://th.bing.com/th/id/OIP.PisgvQ7qnar--dmr6mCDUQHaHa?pid=ImgDet&w=100&h=100&rs=1" },
        { name: "Postman", image: "https://yt3.ggpht.com/a/AGF-l791ySSDFwSHTYVjI0BMuuyqlFmiMutGcvcYcA=s900-c-k-c0xffffffff-no-rj-mo" },
        { name: "Netlify", image: "https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png" },
        { name: "NPM", image: "https://andrejgajdos.com/wp-content/uploads/2019/11/npm-logo.png?x24361" },
    ];

    return (
        <div>
            <div className="skill-tag">
                <h1>Skills and Tools</h1>
            </div>
            <div className="skill-lang">
                {skills.map((skill, index) => (
                    <div className="skill-preant" key={index}>
                        <div className="skill-image">
                            <img 
                                src={skill.image} 
                                alt={`${skill.name} logo`} 
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/130'; }} 
                            />
                        </div>
                        <div className="skill-name">
                            <p>{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
