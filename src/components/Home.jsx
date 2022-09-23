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

export const Home = () => {
  return (
    <>
      <div id="layoutSidenav">
        <SideNavbar />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="my-4">Dashboard</h1>
              <div className="row">
                <div className="col-xl-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <FontAwesomeIcon icon={faChartArea} className="me-1" />
                      Product sales
                    </div>
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <div className="d-flex justify-content-center align-items-stretch">
                        <img
                          src="/chart.JPG"
                          alt=""
                          className="w-100 dashboard-chart"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card mb-4">
                    <div className="card-header">
                      <FontAwesomeIcon icon={faChartBar} className="me-1" />
                      Purchase orders
                    </div>
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <div>
                        <img
                          src="/pieChart.JPG"
                          alt=""
                          className="dashboard-chart"
                        />
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
        </div>
      </div>
    </>
  );
};
