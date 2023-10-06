import React from 'react';
import styles from './Nav.module.css';
import logo from "/src/assets/logo.png";

const Nav = () => {
  return (
    
      <div className={styles.logo}>
        <img src={logo} alt="logo petshop" width="72" />
      
      <ul className={styles.navLinks}>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#adocao">Adoção</a>
        </li>
        <li>
          <a href="#loja">Loja</a>
        </li>
      </ul>
      <input type="text" placeholder="Buscar" />
      </div>
  );
};

export default Nav;




