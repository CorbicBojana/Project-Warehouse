import React from "react";

import "./NavBar.css";

import Logo from "../../img/Logo.svg";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-logo">
        <li className="nav-bar-list-item">
          <a className="nav-bar-logo">
            <img src={Logo} alt="logo" />
            <span>Warehouse</span>
          </a>
        </li>
      </ul>
      <ul className="nav-bar-list">
        <li className="nav-bar-list-item active">
          <a className="nav-bar-link">Categories</a>
        </li>
        <li className="nav-bar-list-item">
          <a className="nav-bar-link">Products</a>
        </li>
        <li className="nav-bar-list-item">
          <a className="nav-bar-link">Suppliers</a>
        </li>
        <li className="nav-bar-list-item">
          <a className="nav-bar-link">Warehouses</a>
        </li>
        <li className="nav-bar-list-item">
          <a className="nav-bar-link">Employees</a>
        </li>
        <li className="nav-bar-list-item">
          <a className="nav-bar-link">Arrivals</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
