import React, { useEffect, useState } from 'react'
// import './App.css';
import { Navigate, useNavigate } from 'react-router-dom';

export default function MasterList() {
  const[masterList,SetMasterlist]=useState([]);

    const show = () => {
        fetch("http://localhost:41827/api/MedicineMaster",
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


   const Navigate=useNavigate();

   const gotoaddmaster=()=>
    {
      
      Navigate('/AddMaster')
    }

    
    const gotoeditmaster=(mid,mnm,cid,cont,Rate,Stock,Bno,Mdate,Edate,Gst,Photo)=>
    {
      // Navigate('/EditCat/'+cid+"/"+cnm);
      Navigate('/UpdateMaster/'+mid+"/"+mnm+"/"+cid+"/"+cont+"/"+Rate+"/"+Stock+"/"+Bno+"/"+Mdate+"/"+Edate+"/"+Gst+"/"+Photo)
      
    }


    const Delete=(id)=>{
  
      // console.log(id)
        fetch("http://localhost:41827/api/MedicineMaster/"+id,
       {method:'DELETE'})
        .then(response=>response.json())
        .then(data=>{
          console.log(data)
         show()
        }
        )
        .catch(error=>console.log(error));
       }
useEffect(()=>show,[])
    // useEffect(()=>show,[])
  return (
    <div>
     <button  onClick={gotoaddmaster}>Add New Cateogory</button>
     <br></br> <br/>
     <table  className=" table table-hover" border="2px">
        
        <tr>
          <th>Medicine Id</th>
          <th>Medicine name</th>
          <th>category Id</th>
          <th>contents</th>
          <th>Rate</th>
          <th>Stock</th>
          <th>Batch No</th>
          <th>Man Date </th>
          <th>Exp Date</th>
          <th>GST</th>
          <th>Photo</th>
          <th>Edit</th>
          <th>Delete</th>
          

          
        </tr>
        
        {
          masterList.map((data) => {
            return (<tr><td>{data.medId}</td>
              <td >{data.medNm}</td>
              <td >{data.catId}</td>
              
              <td >{data.contents}</td>
              <td >{data.rate}</td>
              <td >{data.stock}</td>
              <td >{data.BatchNo}</td>
              <td >{data.manDate}</td>
              <td >{data.expDate}</td>
              <td >{data.gst}</td>
              <td >{data.photo}</td>
             
              <td><button onClick={()=>gotoeditmaster(data.medId,data.medNm,data.catId,data.brandId,data.contents,data.rate,data.stock,data.BatchNo,data.manDate,data.expDate,data.gst,data.photo)}>Edit</button></td>         
              <td><button onClick={()=>Delete(data.medId)}>Delete</button></td>  
            </tr>);
          })
        }
        </table> 
        </div>

    
  )
}
