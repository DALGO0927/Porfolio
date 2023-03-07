import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
