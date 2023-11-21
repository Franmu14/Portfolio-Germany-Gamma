import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Acerca de Nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Somos una familia Argentina que nacimos y vivimos en Rosario y ahora estamos en Madrid.</p>
        <button type="button" className="custom__button">Ver más</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.kneadingroll} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">La idea de hacer una panadería la tuvimos en el 2021. Nos animamos a vender el producto por pedidos en el 2022 y finalmente abrimos el local en el 2023.</p>
        <button type="button" className="custom__button">Ver más</button>
      </div>
    </div>
  </div>
);

export default AboutUs;