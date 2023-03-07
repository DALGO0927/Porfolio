import React from "react";
import "./Projects.css";
import myProyect1 from "../images/project1.png"
import myProyect2 from "../images/project2.jpg"
import myProyect3 from "../images/project3.jpg"
import myProyect4 from "../images/project4.jpg"


const Projects = () => {
  return (
    <section id="projects"className="projects">
      <h2>Proyectos</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>App Comidas</h3>
          <img
            src={myProyect1}
            alt="Proyecto 1"
            className="project-img"
          />
          <p>
          ¡Bienvenido a mi app de comida rápida! Aquí encontrarás una amplia variedad de opciones para satisfacer tus antojos más deliciosos. descubre una forma rápida y fácil de disfrutar de tus comidas favoritas!.
          </p>
          <a href="https://github.com/DALGO0927/APP_restaurante.git">Ver proyecto</a>
        </div>
        <div className="project-card">
          <h3>Foundation page</h3>
          <img
            src={myProyect2}
            alt="Proyecto 2"
            className="project-img"
          />
          <p>
          Página que ofrece un espacio para la colaboración y participación activa de nuestros seguidores, permitiendo la generación de nuevas ideas y proyectos en conjunto.
          </p>
          <a href="https://github.com/DALGO0927/Foundation-Page.git">Ver proyecto</a>
        </div>
        <div className="project-card">
          <h3>Bitacora de Vuelo</h3>
          <img
            src={myProyect3}
            alt="Proyecto 3"
            className="project-img"
          />
          <p>
            Es una aplicación web diseñada para facilitar el registro y seguimiento de vuelos.agregar información detallada sobre sus vuelos.
          </p>
          <a href="https://github.com/DALGO0927/app-Bitacora.git">Ver proyecto</a>
        </div>
        <div className="project-card">
          <h3>App Sorteos</h3>
          <img
            src={myProyect4}
            alt="Proyecto 4"
            className="project-img"
          />
          <p>
          Con mi APP Sorteos, simplemente crea una cuenta, elige el sorteo en el que quieres participar y espera los resultados.
          </p>
          <a href="https://github.com/DALGO0927/app-rifa.git">Ver proyecto</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
