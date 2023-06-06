import React from "react";
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'E-commerce Drug Store',
            description: 'E-commerce web app built with React JS and Node JS for the frontend and backend. The application handles authentication, file storage with Firebase and is integrated with Stripe payment.',
            image: 'placeholder.jpg',
            link: 'https://github.com/am-derrick/drug-store',
            demo: 'https://www.loom.com/share/6b8dbd63b0384a20b7f3da99d6abcc23',
        },
        {
            title: 'Gogool',
            description: 'Google search clone built with react, nodejs for the frontend and backend and the Google Search API by Rapid API to return search results, images, news and videos.',
            image: 'placeholder.jpg',
            link: 'https://github.com/am-derrick/googol',
            demo: 'https://www.loom.com/share/5ecc35cd4acd46c29d068a117b5c1b23',
        },
        {
            title: 'Built a regression model with Keras',
            description: 'Showcasing how increasing the number of training epochs & changing the number of hidden layers impacts the performance of the model.',
            image: 'placeholder.jpg',
            link: 'https://github.com/am-derrick/Build-a-Regression-Model-in-Keras',
            demo: '',
        },
    ];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div className="project" key={index}>
                            <img src={project.image} alt={project.title} />
                            <div className="project-details">
                                <h3>{project.title}</h3>
                                <h3>{project.description}</h3>
                                <a href={project.link}>GitHub Link</a>
                                <a href={project.demo}>Demo</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;