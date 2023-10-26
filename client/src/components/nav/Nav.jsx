import React from "react";
import styles from "./Nav.module.css";
import logo from "/src/assets/logo.png";

const Nav = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo petshop" width="72" />

      <div className={styles.navLinks}>
        <h3>
          <a href="#sobre">Sobre</a>
        </h3>
        <h3>
          <a href="#adocao">Adoção</a>
        </h3>
        <h3>
          <a href="#loja">Loja</a>
        </h3>


      </div>

      

      <input type="text" placeholder="Buscar" />
      <h3>
          <a href="#login">Login</a>
        </h3>

    </div>

    
    
  );
};

export default Nav;
