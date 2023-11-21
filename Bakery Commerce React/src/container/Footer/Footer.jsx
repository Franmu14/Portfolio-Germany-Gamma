import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">Marqués de Zafra 7, Comunidad de Madrid, Madrid, España</p>
        <p className="p__opensans">+34 666-666-6666</p>
        <p className="p__opensans">+34 777-777-7777</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.larosarina} alt="footer_logo" />
        <p className="p__opensans">&quot;No tengas miedo de soñar un poco más grande.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios de Apertura</h1>
        <p className="p__opensans">Martes-Sábado:</p>
        <p className="p__opensans">08:00 - 21:00</p>
        <p className="p__opensans">Domingo:</p>
        <p className="p__opensans">09:00 - 15:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 La Rosarina. Todos los Derechos Reservados.</p>
    </div>

  </div>
);

export default Footer;
