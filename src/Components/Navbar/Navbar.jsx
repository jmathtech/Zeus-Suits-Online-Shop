import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Twirl as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
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

      <Menu>
        <Link id="home" class="menu-item" href="/">
          {" "}
          Home
        </Link>
        <Link id="newarrivals" class="menu-item" href="/">
          {" "}
          NewArrivals
        </Link>
        <Link id="pants" class="menu-item" href="/">
          {" "}
          Pants
        </Link>
        <Link id="suitsblazers" class="menu-item" href="/">
          {" "}
          Suits & Blazers
        </Link>
        <Link id="accessories" class="menu-item" href="/">
          {" "}
          Accessories
        </Link>
      </Menu>
    </>
  );
}

export default Navbar;
