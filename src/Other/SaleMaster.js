import React, { useEffect, useState } from 'react'

export default function Sale_Master() {
  const[sale_id,Setsale_id]=useState("");
  const[sale_date,Setsale_date]=useState("");
  const[ret_id,Setrate_id]=useState("");
  const[grand_total,Setgrand_total]=useState("");
  
  const[masterListlist,SetMasterlist]=useState([]);
  
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
        SetMasterlist(json)
     });
}

  const insert=()=>{
  const newReceipt={sale_id:sale_id,sale_date:sale_date,ret_id:ret_id,grand_total:grand_total};
  fetch("http://localhost:41827/api/Sale_master",
 {
  method:'POST',
  headers:{'Content-type':'application/json;charset=UTF-8'},
  body:JSON.stringify(newReceipt)})
  .then(response=>response.json())
  .then(data=>console.log(data))
  .catch(error=>console.log(error));
 }

 useEffect(()=>showdropdown(),[])

  return (
    <div>
      <div className="p-3 p-lg-5 border">
      <div className="form-group row">
      <div className="col-md-12">
       <label for="brandid" className="text-black">  Sale Date: </label>
       <input  type='text' className="form-control" onChange={(e)=>Setsale_date(e.target.value)}/><br></br>
       </div></div>
      
      <div className="form-group row">
      <div className="col-md-12">
       <label for="brandid" className="text-black">  Rate Id:</label>
       <select className="form-control" onChange={(e) => Setrate_id(e.target.value)} >
                {
                    masterListlist.map((data) => {
                        return (<option value={data.ret_id}>{data.ret_nm}</option>)

                    })
                }
            </select><br></br></div></div>

           
      <div className="form-group row">
      <div className="col-md-12">
       <label for="brandid" className="text-black">  Grand Total: </label>
       <input  type='text' className="form-control" onChange={(e)=>Setgrand_total(e.target.value)}/><br></br>
       </div></div>
      <button  onClick={insert}>Insert</button>
      </div>
    </div>
  )
}
