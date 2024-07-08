import React, { useState } from "react";

export default function Retailer() {
  const [ret_id, SetRetId] = useState("");
  const [ret_nm, SetRetNm] = useState("");
  const [retNamerror, setretnamerror] = useState("");
  const [ret_address, SetRetAddress] = useState("");
  const [addresserror, Setaddresserror] = useState("");
  const [ret_phone, setRetPhone] = useState("");
  const [phonerror, setPhonerror] = useState("");
  const [ret_email, SetRetEmail] = useState("");
  const [emailerror, Setemailerror] = useState("");
  const [ret_balance, SetRetBalance] = useState("");
  const [balanceError, Setbalancerror] = useState("");
  const [retailerlist, Setretailerlist] = useState([]);

  const show = () => {
    fetch("http://localhost:41827/api/Retailer", {
      method: "GET",
      headers: {
        "Content-type": "application/json ;charset=uTF-8",
      },
    })
      .then((Response) => {
        return Response.json();
      })
      .then((json) => {
        console.log(json);
        Setretailerlist(json);
      });
  };

  const insert = () => {
    if (ret_nm.length === 0) setretnamerror("plz enter name");
    else if (!ret_nm.match(/[a-z A-Z ]/))
      setretnamerror("plz enter valid character for name");
    else if (ret_address.length == 0) {
      setretnamerror("");
      Setaddresserror("plz enter character for address");
    } else if (!ret_address.match(/[a-z A-Z 0-9]/))
      Setaddresserror("plz enter valid character for address");
    else if (ret_phone.length == 0) {
      Setaddresserror("");
      setPhonerror("plz enter phone no");
    } else if (!ret_phone.match(/[0-9]/))
      setPhonerror("plz enter valid digits for phone");
    else if (ret_email.length == 0) {
      setPhonerror("");
      Setemailerror("plz enter email");
    } else if (
      !ret_email.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    )
      Setemailerror("plz enter valid email");
    else {
      setretnamerror("");
      Setaddresserror("");
      setPhonerror("");
      Setemailerror("");
      const newReceipt = {
        ret_id: ret_id,
        ret_nm: ret_nm,
        ret_address: ret_address,
        ret_phone: ret_phone,
        ret_email: ret_email,
        ret_balance: ret_balance,
      };
      fetch("http://localhost:41827/api/Retailer", {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(newReceipt),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <div className="p-3 p-lg-5 border">
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Retailer Name:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => SetRetNm(e.target.value)}
            />
            <br></br>
            <span style={{ color: "red" }}>{retNamerror}</span>
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Address:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => SetRetAddress(e.target.value)}
            />
            <br></br>
            <span style={{ color: "red" }}>{addresserror}</span>
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              Phone:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setRetPhone(e.target.value)}
            />
            <br></br>
            <span style={{ color: "red" }}>{phonerror}</span>
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Email:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => SetRetEmail(e.target.value)}
            />
            <br></br>
            <span style={{ color: "red" }}>{emailerror}</span>
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Balance:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => SetRetBalance(e.target.value)}
            />
            <br></br>
          </div>
        </div>
        <button onClick={insert}>Insert</button>
      </div>
    </div>
  );
}
