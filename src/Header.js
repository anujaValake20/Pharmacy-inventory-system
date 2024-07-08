import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header">
        <ul>
          <div className="logo">
            <Link>Wellness Forever</Link>
          </div>
          {/* <li><Link to='/Cart'>Cart</Link></li> */}

          <li>
            <Link to="/AdminLogin">Admin Login</Link>
          </li>
          <li>
            <Link to="/RetailerLogin">Search</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
