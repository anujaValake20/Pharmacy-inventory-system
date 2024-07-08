import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function CustomerLogin() {
  const [uid, SetId] = useState("");

  const [unm, SetName] = useState("");
  const [nameError, SetNamerror] = useState("");
  const [upass, SetPass] = useState("");
  const [passError, SetPasserror] = useState("");
  const [userList, setUserlist] = useState([]);
  const Navigate = useNavigate();
  const insert = () => {
    if (unm.length === 0) SetNamerror("plz enter name");
    else if (
      !unm.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    )
      SetNamerror("plz enter valid character for name");
    else if (upass.length === 0) {
      SetNamerror("");
      SetPasserror("plz enter password");
    } else if (!upass.match(/[0-9]/)) SetPasserror("plz enter valid password");
    else {
      SetPasserror("");
      const newUser = { uid: uid, unm: unm, upass: upass };
      fetch("http://localhost:41827/api/Login", {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      alert("successful login");
    }
    Navigate("/RetailerDashboard");
  };
  return (
    <div>
      <div className="p-3 p-lg-5 border">
        <div className="form-group row">
          <div className="col-md-12">
            <h1>Login form</h1>
          </div>
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
            <span style={{ color: "red" }}>{nameError}</span>
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
              onChange={(e) => SetPass(e.target.value)}
            />
            <br></br>
            <span style={{ color: "red" }}>{passError}</span>
            <br></br>
          </div>
        </div>

        <button onClick={insert}>Login</button>
      </div>
    </div>
  );
}
