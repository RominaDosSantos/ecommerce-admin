import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TopNavbar = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div className="col-12">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3" to="">
          HackShop
        </Link>
        <div
          ref={ref}
          style={{
            width: "100%",
            textAlign: "-webkit-right",
            paddingRight: "20px",
          }}
        >
          <Button
            className="btn dropdown-toggle ht-btn"
            id="btnProfileIcon"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faUser} className="fa-inverse" />
          </Button>
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Link to="/" className="m-3">
                Logout
              </Link>
            </Popover>
          </Overlay>
        </div>
      </nav>
    </div>
  );
};
