import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function AddCart() {
  const[cartId,setCartId]=useState("");
    const[custId,setCusttId]=useState("");
    const[cartDate,setCartDate]=useState("");
  const [medId, setmedId] = useState("");
  const [medNm, setmedNm] = useState("");
  const[mednmerror,setmednmerror]=useState("");
  const [medRate, setmedrate] = useState("");
  const [medQty, setmedQty] = useState("");
  const [medAmt, setmedAmt] = useState("");
  const [cartList, setCartList] = useState([]);
  const Navigate = useNavigate();

  const insert=()=>{

    if (medNm.length == 0) 
     
    setmedNm("plz enter character for name");
    
    else
      if (!medNm.match(/[a-z A-Z ]/))
        setmedNm("plz enter valid character for name")
      else
      {
        setmednmerror("")  
        const newcart = {cartId:cartId,custId:custId,cartDate:cartDate,medId:medId,medNm:medNm,medRate:medRate,medQty:medQty,medAmt:medAmt};
      fetch("http://localhost:41827/api/ViewCart",
     {
      method:'POST',
      headers:{'Content-type':'application/json;charset=UTF-8'},
      body:JSON.stringify(newcart)})
      .then(response=>response.json())
      .then(data=>console.log(data))
      .catch(error=>console.log(error));
     }
     console.log("data inserted")
     
    

     };

  
  return (
    <div>

      <div className="p-3 p-lg-5 border">
      <div className="form-group row">                  
       <div className="col-md-12">
      <label for="brandid" className="text-black">  Customer Id: </label>
      <input  type='text' className="form-control" onChange={(e)=>setCusttId(e.target.value)} /><br></br>
     
       </div></div>
      
      <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black">  Cart Date: </label>
      <input  type='text' className="form-control" onChange={(e)=>setCartDate(e.target.value)} /><br></br>
       {/* <span style={{ color: "red" }}>{medNmerror}</span><br></br> */}
      </div></div>
        <div className="form-group row">
          <div className="col-md-12">
            <label for="brandid" className="text-black">  Medicine Id: </label>
           
            <input type='text' className="form-control" onChange={(e) => setmedId(e.target.value)} /><br></br>
            {/* <span style={{ color: "red" }}>{medNmerror}</span><br></br> */}
            <div className="form-group row">
              <div className="col-md-12">
                <label for="brandid" className="text-black">  Medicine name: </label>
                <input type='text' className="form-control" onChange={(e) => setmedNm(e.target.value)} /><br></br>
                <span style={{ color: "red" }}>{mednmerror}</span><br></br>
              </div></div>
            <div className="form-group row">
              <div className="col-md-12">
                <label for="brandid" className="text-black">  Medicine Rate: </label>
                <input type='text' className="form-control" onChange={(e) => setmedrate(e.target.value)} /><br></br>
                {/* <span style={{ color: "red" }}>{medNmerror}</span><br></br> */}
              </div></div>
            <div className="form-group row">
              <div className="col-md-12">
                <label for="brandid" className="text-black">  Medicine Quantity: </label>
                <input type='text' className="form-control" onChange={(e) => setmedQty(e.target.value)} /><br></br>
                {/* <span style={{ color: "red" }}>{medNmerror}</span><br></br> */}
              </div></div>
            <div className="form-group row">
              <div className="col-md-12">
                <label for="brandid" className="text-black">  Medicine Amount: </label>
                <input type='text' className="form-control" onChange={(e) => setmedAmt(e.target.value)} /><br></br>
                <button onClick={insert}>Insert</button>
              </div></div>
          </div></div>   </div>   </div>

  )
}
