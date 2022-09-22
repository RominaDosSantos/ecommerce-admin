import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChartArea,
  faChartBar,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { DataTable } from "./DataTable";
import { PaginationAdmin } from "./PaginationAdmin";
import { SideNavbar } from "./SideNavbar";
import { useSelector } from "react-redux";

export const Home = () => {
  return (
    <>
      <div className="row">
        <SideNavbar />
        <div className="col-10">
          <div id="layoutSidenav">
            <div id="layoutSidenav_content">
              <main>
                <div className="container-fluid px-4">
                  <h1 className="my-4">Dashboard</h1>
                  {/* <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol> */}
                  {/* <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Primary Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                          <Link
                            className="small text-white stretched-link"
                            to="#"
                          >
                            View Details
                          </Link>
                          <div className="small text-white">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-warning text-white mb-4">
                        <div className="card-body">Warning Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                          <Link
                            className="small text-white stretched-link"
                            to="#"
                          >
                            View Details
                          </Link>
                          <div className="small text-white">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-success text-white mb-4">
                        <div className="card-body">Success Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                          <Link
                            className="small text-white stretched-link"
                            to="#"
                          >
                            View Details
                          </Link>
                          <div className="small text-white">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-danger text-white mb-4">
                        <div className="card-body">Danger Card</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                          <Link
                            className="small text-white stretched-link"
                            to="#"
                          >
                            View Details
                          </Link>
                          <div className="small text-white">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="card mb-4">
                        <div className="card-header">
                          <FontAwesomeIcon
                            icon={faChartArea}
                            className="me-1"
                          />
                          Area Chart Example
                        </div>
                        <div className="card-body d-flex justify-content-center align-items-center">
                          <div>
                            <img src="/chart.JPG" alt="" className="w-100" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card mb-4">
                        <div className="card-header">
                          <FontAwesomeIcon icon={faChartBar} className="me-1" />
                          Bar Chart Example
                        </div>
                        <div className="card-body d-flex justify-content-center align-items-center">
                          <div>
                            <img src="/pieChart.JPG" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4">
                    <div className="card-header">
                      <FontAwesomeIcon icon={faTable} className="me-1" />
                      Products Table
                    </div>
                    <div className="card-body">
                      <DataTable />
                      <div className="d-flex justify-content-end">
                        <PaginationAdmin />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              {/* <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">
              Copyright &copy; Your Website 2022
              </div>
              <div>
              <a href="#">Privacy Policy</a>
              &middot;
              <a href="#">Terms &amp; Conditions</a>
              </div>
              </div>
              </div>
            </footer> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
