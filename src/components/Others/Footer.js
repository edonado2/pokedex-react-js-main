import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <p className="mr-1 credits-text">Developed by</p>
        <a className="mhq" target="_blank" href="#">
          Ernesto Donado
        </a>
      </div>
    </footer>
  );
};

export default Footer;
