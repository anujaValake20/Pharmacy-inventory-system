import React from "react";
import { Link } from "react-router-dom";
import "./bootstrap/dist/css/bootstrap.css";
import "./Sidebar.css";

export default function AdminDashboard() {
  return (
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

              <li className="nav-item text-white fs-4 my-1">
                <a
                  href=""
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  <span className="ms-2">Dashboard</span>
                </a>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <Link
                  to="/CatList"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  {" "}
                  <span className="ms-2">MedicineCat </span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <Link
                  to="/MasterList"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  {" "}
                  <span className="ms-2">MedicineMaster </span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <Link
                  to="/BrandList"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  {" "}
                  <span className="ms-2">Brand </span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <Link
                  to="/SaleMaster"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  {" "}
                  <span className="ms-2">SaleMaster </span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <Link
                  to="/SaleDetails"
                  className="nav-link text-white fs-5"
                  aria-current="page"
                >
                  {" "}
                  <span className="ms-2">SaleDetails </span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <h4>
                  <Link
                    to="/Retailer"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    {" "}
                    <span className="ms-2">Retailer </span>
                  </Link>
                </h4>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <h4>
                  <Link
                    to="/Receipt"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    {" "}
                    <span className="ms-2">Receipt </span>
                  </Link>
                </h4>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <h4>
                  <Link
                    to="/Invoice"
                    className="nav-link text-white fs-5"
                    aria-current="page"
                  >
                    {" "}
                    <span className="ms-2">Invoice</span>
                  </Link>
                </h4>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
