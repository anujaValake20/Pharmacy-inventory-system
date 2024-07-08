import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const Navigate = useNavigate();

  const [name, SetName] = useState();
  const [password, Setpassword] = useState();
  const Login = () => {
    if (name == "admin" && password == "123") {
      alert("successful");
      Navigate("/AdminDashboard");
    } else alert("unsuccesful");
  };
  return (
    <div>
      <div className="p-3 p-lg-5 border">
        <div className="form-group row">
          <div className="col-md-12"></div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="usernm" className="text-black">
              {" "}
              Name:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => SetName(e.target.value)}
            />
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="userpass" className="text-black">
              {" "}
              Password:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => Setpassword(e.target.value)}
            />
            <br></br>
          </div>
        </div>

        <button onClick={Login}>Login</button>
      </div>
    </div>
  );
}
