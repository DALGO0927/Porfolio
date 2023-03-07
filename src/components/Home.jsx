import React from 'react';
import './Home.css';
import Myphoto from '../images/diego.jpg';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={Myphoto} alt="Foto de Diego León" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>¡Hola, soy Diego León!</h1>
            <p>Soy un desarrollador full stack apasionado por crear soluciones digitales innovadoras.</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/diego-leon-08996a10a/" target="_blank" rel="noopener"><FaLinkedin size={32}/></a>
              <a href="https://github.com/diegoleonardolar" target="_blank" rel="noopener"><FaGithub size={32}/></a>
              <a href="https://twitter.com/Diego__Leon" target="_blank" rel="noopener"><FaTwitter size={32}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
