import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Receipt() {
  const[rec_id,SetRecId]=useState("")
  const[rec_date,SetRecDate]=useState("")
  const[ret_id,SetRetId]=useState("")
const{amt}=useParams()
const navigate=useNavigate()
  const[rec_amt,SetReAmt]=useState(amt)
  const[receiptlist,setReceiptList]=useState([]);
  const [currentDate,setCurrentDate]=useState(new Date());
  const showdropdown = () => {
    fetch("http://localhost:41827/api/Retailer",
      {
        method: 'GET',
      headers: {
         "Content-type": "application/json ;charset=uTF-8"
      }
     }).then(Response => {
        return Response.json()
      }).then(json => {
        console.log(json)
        setReceiptList(json)
     });
  }




  const insert=()=>{
  const newReceipt={rec_id:rec_id,rec_date:new Date(),ret_id:ret_id,rec_amt:rec_amt};
  fetch("http://localhost:41827/api/Receipt",
 {
  method:'POST',
  headers:{'Content-type':'application/json;charset=UTF-8'},
  body:JSON.stringify(newReceipt)})
  .then(response=>response.json())
  .then(data=>console.log(data))
  .catch(error=>console.log(error));

  navigate('/Invoice')
 }

 useEffect(() => {
  const interval = setInterval(() => {
    setCurrentDate(new Date());
  }, 1000); // Update every second

  return () => clearInterval(interval);
}, []);


 useEffect(()=>showdropdown(),[])
  return (
    <div>
      <div className="p-3 p-lg-5 border">
   <div className="form-group row">
      <div className="col-md-12">
       <label for="brandid" className="text-black">   Receipt Date:  </label>
      <input  type='text' className="form-control" value={currentDate.toLocaleDateString()}/><br></br>
      </div></div>
      <div className="form-group row">
      <div className="col-md-12">
      <label for="brandid" className="text-black"> Retailer Id: </label>
      <select className="form-control" onChange={(e) => SetRetId(e.target.value)} >
                {
                    receiptlist.map((data) => {
                        return (<option value={data.ret_id}>{data.ret_nm}</option>)

                    })
                }
            </select><br></br>
      {/* <input  type='text' className="form-control" onChange={(e)=>SetRetId(e.target.value)}/><br></br> */}
      </div></div>
      <div className="form-group row">
      <div className="col-md-12">
      <label for="brandid" className="text-black">Amount:</label>
      <input  type='text' className="form-control" value={rec_amt} onChange={(e)=>SetReAmt(e.target.value)}/><br></br>
      </div></div>
<button  onClick={insert}>Insert</button>
    </div>
    </div>
  )
}
