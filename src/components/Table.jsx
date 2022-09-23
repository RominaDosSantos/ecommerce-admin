import React from "react";
import { DataTable } from "./DataTable";
import { PaginationAdmin } from "./PaginationAdmin";
import { SideNavbar } from "./SideNavbar";

export const Table = () => {
  return (
    <div id="layoutSidenav">
      <SideNavbar />
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Tables</h1>
            <div className="card mb-4">
              <div className="card-header">Products</div>
              <div className="card-body">
                <DataTable />
                <div className="d-flex justify-content-end">
                  <PaginationAdmin />
                </div>
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
