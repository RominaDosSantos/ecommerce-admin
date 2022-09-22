import React from "react";

export const Chart = () => {
  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Charts</h1>
        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-chart-area me-1"></i>
            Sales
          </div>
          <div className="card-body d-flex justify-content-center align-items-center">
            <div>
              <img src="/chart.JPG" alt="" />
            </div>
          </div>
          <div className="card-footer small text-muted">
            Updated yesterday at 11:59 PM
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-bar me-1"></i>
                Orders
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div>
                  <img src="/barChart.JPG" alt="" />
                </div>
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-pie me-1"></i>
                Category
              </div>
              <div className="card-body d-flex justify-content-center align-items-center">
                <div>
                  <img src="/pieChart.JPG" alt="" />
                </div>
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
