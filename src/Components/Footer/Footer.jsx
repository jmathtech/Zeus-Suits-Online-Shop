import React from "react";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="page-footer blue-grey darken-1">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">
                ZEUS<small>&trade;</small> Suits & Tie Shop
              </h5>
              <p class="grey-text text-lighten-4">
                An exclusive experience with custom tailoring & accessories to
                meet your needs for the occasion.
              </p>
              <Instagram color="white" size="2rem" />
              <Github color="white" size="2rem" />
            </div>

            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Contact
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Map Directions
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Company Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright blue-grey darken-2">
          <div class="container">
            Copyright &copy; 1910-2022 ZEUS<small>&trade;</small> Clothing,
            Corp. All Rights Reserved.
            <a class="grey-text text-lighten-4 right" href="#!">
              Legal Notice
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
