import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/config/slices/loginSlice";
import { useSelector } from "react-redux";
import { OverlayTrigger } from "react-bootstrap";

export const TopNavbar = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef(null);
  const admin = useSelector((state) => state.login.token);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  async function handlerLogout() {
    dispatch(logoutUser());
    navigate("/");
  }

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <Link className="navbar-brand ps-3" to="/">
        HackShop
      </Link>
      <button
        className="btn btn-link btn-sm order-1 me-4 d-lg-none"
        id="sidebarToggle"
      >
        <FontAwesomeIcon icon={faBars} className="fa-inverse" />
      </button>
      <div
        ref={ref}
        style={{
          width: "100%",
          textAlign: "-webkit-right",
          paddingRight: "20px",
        }}
      >
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          rootClose
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Link className="dropdown-item" to="/">
                <span className="fw-bold">{admin?.email}</span>
              </Link>
              <Link
                to="/"
                className="dropdown-item"
                onClick={() => {
                  handlerLogout();
                  handleClick();
                }}
              >
                Logout
              </Link>
            </Popover>
          }
        >
          <Button className="btn dropdown-toggle ht-btn" id="btnProfileIcon">
            <FontAwesomeIcon icon={faUser} className="fa-inverse" />
          </Button>
        </OverlayTrigger>
      </div>
    </nav>
  );
};
