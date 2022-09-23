import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SideNavbar = () => {
  const admin = useSelector((state) => state.login.token);
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to={"/"}>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <Link className="nav-link" to={"/chart"}>
              Charts
            </Link>
            <Link className="nav-link" to={"/table"}>
              Tables
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
