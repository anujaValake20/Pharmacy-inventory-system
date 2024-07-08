import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Cart() {
  const[cartId,setCartId]=useState("");
    const[custId,setCusttId]=useState("");
    const[cartDate,setCartDate]=useState("");
    const[medId,setmedId]=useState("");
    const[medNm,setmedNm]=useState("");
    const[medRate,setmedrate]=useState("");
    const[medQty,setmedQty]=useState("");
    const[medAmt,setmedAmt]=useState("");
    const[cartList,setCartList]=useState([]);

const Navigate=useNavigate()

    const insert=()=>{
const newcart={cartId:cartId,custId:custId,cartDate:cartDate,medId:medId,medNm:medNm,medRate:medRate,medQty:medQty,medAmt:medAmt};
        fetch("http://localhost/php_program/cart.php",
       {
        method:'POST',
        headers:{'Content-type':'application/json;charset=UTF-8'},
        body:JSON.stringify(newcart)})
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error));
        console.log("data inserted")

        Navigate('/ViewCart')
       }
  
      
  return (
    <div>
       <div className="p-3 p-lg-5 border">
       <div className="form-group row">
                   <div className="col-md-12">
      <label for="cartId" className="text-black"> cart Id: </label>
      <input  type='text' className="form-control" onChange={(e)=>setCartId(e.target.value)} /><br></br>
       </div></div>

      <div className="form-group row">                   <div className="col-md-12">
      <label for="brandid" className="text-black">  Customer Id: </label>
      <input  type='text' className="form-control" onChange={(e)=>setCusttId(e.target.value)} /><br></br>
      {/* <select className="form-control" onChange={(e) => setCusttId(e.target.value)} >
//                 {
//                     cartList.map((data) => {
//                         return (<option value={data.custId}>{data.custId}</option>)

//                     })
//                 }
//             </select><br></br>  */}
       {/* <span style={{ color: "red" }}>{medNmerror}</span><br></br> */}
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
       {/* <select className="form-control" onChange={(e) => setmedId(e.target.value)} >
//                 {
//                     cartList.map((data) => {
//                         return (<option value={data.medId}>{data.medNm}</option>)

//                     })
//                 }
//             </select><br></br> */}
       <input  type='text' className="form-control" onChange={(e)=>setmedId(e.target.value)} /><br></br>
       {/* <span style={{ color: "red" }}>{medNmerror}</span><br></br> */}
       <div className="form-group row">
                   <div className="col-md-12">
       <label for="brandid" className="text-black">  Medicine name: </label>
       <input  type='text' className="form-control" onChange={(e)=>setmedNm(e.target.value)} /><br></br>
       {/* <span style={{ color: "red" }}>{medNmerror}</span><br></br> */}
       </div></div>
       <div className="form-group row">
                   <div className="col-md-12">
       <label for="brandid" className="text-black">  Medicine Rate: </label>
       <input  type='text' className="form-control" onChange={(e)=>setmedrate(e.target.value)} /><br></br>
       {/* <span style={{ color: "red" }}>{medNmerror}</span><br></br> */}
       </div></div>
       <div className="form-group row">
                   <div className="col-md-12">
       <label for="brandid" className="text-black">  Medicine Quantity: </label>
       <input  type='text' className="form-control" onChange={(e)=>setmedQty(e.target.value)} /><br></br>
       {/* <span style={{ color: "red" }}>{medNmerror}</span><br></br> */}
       </div></div>
       <div className="form-group row">
                   <div className="col-md-12">
       <label for="brandid" className="text-black">  Medicine Amount: </label> 
             <input  type='text' className="form-control" onChange={(e)=>setmedAmt(e.target.value)} /><br></br>
       <button onClick={insert}>Insert</button> 
       </div></div>
      </div></div>      </div>

    </div>
  )
}
