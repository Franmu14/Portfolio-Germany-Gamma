import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encuentranos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Marqués de Zafra 7, Comunidad de Madrid, Madrid, España</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horarios de Apertura</p>
        <p className="p__opensans">Martes - Sábado: 09:00 - 21:00</p>
        <p className="p__opensans">Domingo: 09:00 - 15:00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitanos</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
