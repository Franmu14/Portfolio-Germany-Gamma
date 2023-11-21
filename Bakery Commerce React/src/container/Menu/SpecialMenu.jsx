import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Nuestro Especial</h1>
    </div>

    <div className="app__specialMenu-menu">
      
      

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Chaja Argentino</p>
        <div className="app__specialMenu_menu_items">
          <p className="p__opensans">El Chajá Argentino es un festín exquisito con capas de bizcocho suave, duraznos frescos, dulce de leche, merengues crujientes y crema chantilly suave. Este postre combina a la perfección sabores y texturas para una experiencia deliciosa y agradable. ¡Un placer culinario para compartir en familia!</p>
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">Ver más</button>
    </div>
  </div>
);

export default SpecialMenu;
