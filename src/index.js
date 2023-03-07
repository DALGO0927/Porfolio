import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
