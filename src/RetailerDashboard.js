import React from "react";
import { Link } from "react-router-dom";
// import 'bootstrap-icons/font/bootstrap-icons.css'

export default function RetailerDashboard() {
  return (
    <div>
      <div className="app">
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh100">
              <div>
                <a className="text-decoration-none ms-4 d-flex align-ites-center text-white d-none d-sm-inline">
                  <span className="fs-4">Pharmacy</span>
                </a>
                <hr className="text-white d-none d-sm-block"></hr>
                <hr className="text-white d-none d-sm-block"></hr>

                <h4>
                  {" "}
                  <span className="ms-2">Dashboard</span>
                </h4>
                <br></br>

                <h4>
                  {" "}
                  <Link
                    to="/MedicineList"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    {" "}
                    <span className="ms-2">Search </span>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
