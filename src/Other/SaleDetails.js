import React, { useEffect, useState } from "react";

export default function Sale_details() {
  const [sale_det_id, Setsale_det_id] = useState("");
  const [sale_id, SetSaleId] = useState("");
  const [cat_id, SetCatId] = useState("");
  const [medId, SetMedId] = useState("");

  const [rate, SetRate] = useState("");
  const [qty, Setqty] = useState("");
  const [amt, Setamt] = useState("");
  const [gstamt, Setgstamt] = useState("");
  const [total, Settotal] = useState("");
  const [detailsList, SetdetailsList] = useState([]);
  const [SaleList, SetsaleList] = useState([]);
  const [medList, SetMedList] = useState([]);

  const showdropdown = () => {
    fetch("http://localhost:41827/api/Sale_master", {
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
        SetdetailsList(json);
      });
  };
  const showdropdown1 = () => {
    fetch("http://localhost:41827/api/MedicineCat", {
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
        SetsaleList(json);
      });
  };
  const showdropdown2 = () => {
    fetch("http://localhost:41827/api/MedicineMaster", {
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
        SetMedList(json);
      });
  };

  const insert = () => {
    const newReceipt = {
      sale_det_id: sale_det_id,
      sale_id: sale_id,
      cat_id: cat_id,
      medId: medId,
      rate: rate,
      qty: qty,
      amt: amt,
      gstamt: gstamt,
      total: total,
    };
    fetch("http://localhost:41827/api/Sale_details", {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(newReceipt),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    showdropdown();
    showdropdown1();
    showdropdown2();
  }, []);

  return (
    <div>
      <div className="p-3 p-lg-5 border">
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Sale Date Id:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => Setsale_det_id(e.target.value)}
            />
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Sale Id:{" "}
            </label>
            <select
              className="form-control"
              onChange={(e) => SetSaleId(e.target.value)}
            >
              {detailsList.map((data) => {
                return <option value={data.sale_id}>{data.sale_id}</option>;
              })}
            </select>
            <br></br>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Category:{" "}
            </label>
            <select
              className="form-control"
              onChange={(e) => SetCatId(e.target.value)}
            >
              {SaleList.map((data) => {
                return <option value={data.catId}>{data.catName}</option>;
              })}
            </select>
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Medicine :
            </label>
            <select
              className="form-control"
              onChange={(e) => SetMedId(e.target.value)}
            >
              {medList.map((data) => {
                return <option value={data.medId}>{data.medNm}</option>;
              })}
            </select>
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Rate:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => SetRate(e.target.value)}
            />
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Quantity:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => Setqty(e.target.value)}
            />
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Amount:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => Setamt(e.target.value)}
            />
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Gst Amount:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => Setgstamt(e.target.value)}
            />
            <br></br>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">
              {" "}
              Total:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => Settotal(e.target.value)}
            />
            <br></br>
          </div>
        </div>
        <button onClick={insert}>Insert</button>
      </div>
    </div>
  );
}
