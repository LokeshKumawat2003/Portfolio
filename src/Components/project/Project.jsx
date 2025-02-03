import React from "react";
import "../project/project.css";
import { FaGithub } from "react-icons/fa6";
import { LiaPage4 } from "react-icons/lia";
const Project = () => {
    const projects = [
        {
            image: "p2.png",
            name: "Placed.job",
            description: "Placed.Job is a job portal platform designed for both job seekers and employers. It allows users to apply for jobs, complete skill assessments, and attend interviews in one seamless process. The application connects job seekers with employers, offering them an efficient way to manage job applications and assessments. For employers, it provides tools to review candidates, assess their skills, and schedule interviews.",
            demo: "https://tiny-brigadeiros-2774b1.netlify.app/",
            github: "https://github.com/LokeshKumawat2003/Placed.job?tab=readme-ov-file",
            Technology: ["React", "Node.js", "CSS", "JavaScript", "React-Router", "MongoDB"]
        },

        {
            image: "p1.png",
            name: "PharmEasy E-Commerce",
            description: "PharmEasy E-Commerce Server is a backend API built with Node.js and Express.js for an e-commerce platform. It provides authentication, user management, product management, order handling, and payment processing using MongoDB with Mongoose.",
            demo: "https://poetic-lebkuchen-6cf716.netlify.app/",
            github: "https://github.com/LokeshKumawat2003/pharmEasyServer?tab=readme-ov-file",
            Technology: ["React", "Node.js", "CSS", "JavaScript", "React-Router", "MongoDB"]
        },
        {
            image: "p3.png",
            name: "Swindia.com",
            description: "This project is a React-based lead management system where users can view, create, and manage leads effectively. The application communicates with a backend API to fetch and update lead data. The app provides functionality for filtering leads, updating their status, and assigning leads to specific team members",
            demo: "https://dashing-cajeta-98fada.netlify.app/",
            github: "https://github.com/LokeshKumawat2003/Swindia",
            Technology: ["React", "Node.js", "CSS", "JavaScript", "React-Router", "MongoDB"]
        },
        {
            image: "p4.png",
            name: "Multimart",
            description: "MultiMart is an e-commerce web application built with React, Redux, and React Router. It features a user-friendly interface and state management using Redux for a seamless shopping experience.",
            demo: "https://jade-sopapillas-a675eb.netlify.app/",
            github: "https://github.com/LokeshKumawat2003/multyMart",
            Technology: ["React", "Node.js", "CSS", "JavaScript", "React-Router"]
        },

    ];

    return (
        <div className="projects-container">
            <h1 className="projects-heading">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img
                            src={project.image}
                            alt={`Preview of ${project.name}`}
                            className="project-image"
                        />
                        <div className="project-details">
                            <h2 className="project-title">{project.name}</h2>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                {project.Technology.map((tech, i) => (
                                    <span className="technology-badge" key={i}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link github-link"
                                >
                                    <FaGithub />
                                    View GitHub
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link demo-link"
                                >
                                    <LiaPage4 />
                                    View  Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
