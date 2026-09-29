import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4>Recursos</h4>
          <ul className="footer__links">
            <li><a href="#">Instalación</a></li>
            <li><a href="#">Notas de versión</a></li>
            <li><a href="#">Ayuda comunitaria</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Empresa</h4>
          <ul className="footer__links">
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Carreras</a></li>
            <li><a href="#">Prensa</a></li>
            <li><a href="#">Soporte</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Producto</h4>
          <ul className="footer__links">
            <li><a href="#">Demostración</a></li>
            <li><a href="#">Seguridad</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Características</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Síguenos</h4>
          <ul className="footer__socials">
            <li>
              <a href="#" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#" aria-label="Twitter"><i className="ri-twitter-fill"></i></a>
            </li>
            <li>
              <a href="#" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        Copyright © 2024 Ramiro Lacci. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
