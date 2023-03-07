import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';

function Skills() {
  return (
    <section id='skills'>
      <div className="skills">
        <h2>Habilidades</h2>
        <div className="skill-list">
          <div className="skill">
            <div className="skill-icon">
              <FaHtml5 size={75} color="#f7df1d"/>
            </div>
            <p>HTML5</p>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <FaCss3 size={75} color="blue"/>
            </div>
            <p>CSS3</p>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <FaJs size={75} style={{ color: "#f7df1e" }}/>
            </div>
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <FaReact size={75} color="#60d2f7" />
            </div>
            <p>React</p>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <FaNodeJs size={75} style={{color: '#7DBB3F', backgroundColor: 'black', borderRadius:"40px"}}/>
            </div>
            <p>Node.js</p>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <FaDatabase size={55} style={{color: '#7DBB3F', backgroundColor: '#FFFFFF'}}/>
            </div>
            <p>MongoDB</p>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <FaPython size={80} style={{color:"#306998", backgroundColor: 'yellow',borderRadius:"40px"}}/>
            </div>
            <p>Python</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;


