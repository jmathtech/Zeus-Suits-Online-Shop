import React from "react";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="page-footer blue-grey darken-4">

          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">ZEUS Men's Suit & Tie Shop</h5>
                <p class="grey-text text-lighten-4">Premier gentlemen's apparrel and accessories.</p>
                <Instagram color="white" size="2rem" />
              <Github color="white" size="2rem" />
              </div>

              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Directions</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Company Info</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright blue-grey darken-3">
            <div class="container">
            Copyright &copy; 2022 ZEUS Men's Clothing, Corp. All Rights Reserved.
            <a class="grey-text text-lighten-4 right" href="#!">Legal</a>
            </div>
          </div>

        </footer>
    </>
  );
};

export default Footer;
