/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Twirl as Hamburger } from "hamburger-react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper blue-grey darken-1">
          <Link to="#" data-target="sidebar" class="sidenav-trigger">
            <Hamburger direction="right" size={20} easing="ease-in" />
          </Link>

          <Link to="#" class="brand-logo white-text text-darken-4">
            <i class="large material-icons">flash_on</i> ZEUS
            <small>&trade;</small>
          </Link>

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
              <Link to="/"> Suits & Blazers </Link>
            </li>
            <li>
              <Link to="/"> Accessories </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="sidebar">
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
        <a href="#"> New Arrivals </a>
        </li>
        <li>
        <a href="#"> Pants </a>
        </li>
        <li>
        <a href="#"> Suits & Blazers </a>
        </li>
        <li>
        <a href="#"> Accessories </a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
