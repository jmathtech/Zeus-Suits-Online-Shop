import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css";

function Navbar() {
    return (
      <>
        <nav>
          <div className="nav-wrapper blue-grey darken-1">
            <Link to="#" data-target="sidebar" class="sidenav-trigger">
              <Hamburger
                direction="right"
                size={20}
                easing="ease-in"
              />
            </Link>

            <a href="#!" class="brand-logo white-text text-darken-4">
              <i class="large material-icons">flash_on</i> ZEUS
              <small>&trade;</small>
            </a>

            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/"> New Arrivals </Link>
              </li>
              <li>
                <Link to="/"> Pants </Link>
              </li>
              <li>
                <Link to="/"> Shorts & Swimwear </Link>
              </li>
              <li>
                <Link to="/"> Golf </Link>
              </li>
              <li>
                <Link to="/"> Sweaters </Link>
              </li>
              <li>
                <Link to="/"> Suits & Blazers </Link>
              </li>
              <li>
                <Link to="/"> Outerwear </Link>
              </li>
              <li>
                <Link to="/"> Accessories </Link>
              </li>
              <li>
                <Link to="/"> Sale </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}
export default Navbar;