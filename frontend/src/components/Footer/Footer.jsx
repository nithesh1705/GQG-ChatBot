import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Copyright © 2024 GQG-ChatBot. Designed By{" "}
          <a href="https://www.linkedin.com/in/nitheshm/">NGX-Visson</a>
        </p>
      </div>
      <div className={styles.handles}>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/nithesh1705">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/nitheshm/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
