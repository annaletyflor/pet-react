import React from 'react';
import logo from "/src/assets/logo.png";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo Petshop" width="72" />
      </div>

      <ul className={styles.footerLinks}>
        <li>
          <a href="#termos">Termos de Serviço</a>
        </li>
        <li>
          <a href="#politica">Política de Privacidade</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>

      <div className={styles.footerText}>
        <p>2023 BossalInk. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
