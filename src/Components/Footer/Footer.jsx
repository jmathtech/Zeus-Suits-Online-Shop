import React from "react";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer blue-grey darken-4">
        <div class="f-icons center-block">
          <Instagram color="white" size="2rem" />
          <Github color="white" size="2rem" />
        </div>
        <div class="left">
          <span class="centered">
            Copyright &copy; 2022 ZEUS Men's Clothing, Corp.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
