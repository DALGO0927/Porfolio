import React from "react";
import "./Projects.css";


const Projects = () => {
  return (
    <section id="projects"className="projects">
      <h2>Proyectos</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Proyecto 1</h3>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Proyecto 1"
            className="project-img"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            posuere fermentum mauris quis tempus.
          </p>
          <a href="#">Ver proyecto</a>
        </div>
        <div className="project-card">
          <h3>Proyecto 2</h3>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Proyecto 2"
            className="project-img"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            posuere fermentum mauris quis tempus.
          </p>
          <a href="#">Ver proyecto</a>
        </div>
        <div className="project-card">
          <h3>Proyecto 3</h3>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Proyecto 3"
            className="project-img"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            posuere fermentum mauris quis tempus.
          </p>
          <a href="#">Ver proyecto</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
