import React from "react";
import { SideNavbar } from "./SideNavbar";

export const Chart = () => {
  return (
    <div id="layoutSidenav">
      <SideNavbar />
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Charts</h1>
            <div className="card mb-4">
              <div className="card-header">Product sales</div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div>
                  <img src="/chart.JPG" className="w-100" alt="" />
                </div>
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 10:23
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header">Purchase orders</div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <div>
                      <img src="/barChart.JPG" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="card-footer small text-muted">
                    Updated yesterday at 11:59
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-header">Sales by Category</div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <div>
                      <img src="/pieChart.JPG" className="w-100" alt="" />
                    </div>
                  </div>
                  <div className="card-footer small text-muted">
                    Updated yesterday at 13:32
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
