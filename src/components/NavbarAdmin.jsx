import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

export const NavbarAdmin = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <>
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link class="navbar-brand ps-3" to="">
          HackShop
        </Link>
        <div ref={ref} style={{ width: "100%", textAlign: "-webkit-right" }}>
          <Button
            className="btn btn-link dropdown-toggle ht-btn p-0"
            id="btnProfileIcon"
            onClick={handleClick}
          >
            <i class="fas fa-user fa-fw"></i>
          </Button>
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Link to="/">Logout</Link>
            </Popover>
          </Overlay>
        </div>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            class="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div class="sb-sidenav-menu">
              <div class="nav">
                <div class="sb-sidenav-menu-heading">Core</div>
                <a class="nav-link" href="index.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </a>
                <div class="sb-sidenav-menu-heading">Addons</div>
                <a class="nav-link" href="charts.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-chart-area"></i>
                  </div>
                  Charts
                </a>
                <a class="nav-link" href="tables.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-table"></i>
                  </div>
                  Tables
                </a>
              </div>
            </div>
            <div class="sb-sidenav-footer">
              <div class="small">Logged in as:</div>
              Start Bootstrap
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
