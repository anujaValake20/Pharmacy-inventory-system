import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';

export default function UpdateMaster() {
  const[medId,SetMedid]=useState("");
  const[medNm,SetMedNm]=useState("");
  const[medNmerror,SetmedNmerror]=useState("")
  const[catId,SetCatId]=useState("");
  const[brandId,SetBrandId]=useState("");
  const[contents,SetContents]=useState("");
  const[contentserror,Setcontenterror]=useState("")
  const[rate,SetRate]=useState("");
  const[Rateerror,SetRateerror]=useState("")
  const[stock,SetStock]=useState("");
  const[stockerror,Setstockerror]=useState("")
  const[BatchNo,SetBatchNo]=useState("");
  const[BatchNoerror,SetBatchNoerror]=useState("")
  const[manDate,SetmanDate]=useState("");
 const[expDate,SetExpDate]=useState("");
  const[gst,SetGst]=useState("");
  const[photo,SetPhoto]=useState("");
  const[photoerror,Setphotoerror]=useState("")
  const{mid,mnm,cid,cont,Rate,Stock,Bno,Mdate,Edate,Gst,Photo}=useParams();
   
  const update=()=>{

    if (medNm.length == 0) 
     
    SetmedNmerror("plz enter character for name");
    
    else
      if (!medNm.match(/[a-z A-Z ]/))
      SetmedNmerror("plz enter valid character for name")
      else
      if (contents.length == 0) 
     
      Setcontenterror("plz enter character for name");
      
      else
        if (!contents.match(/[a-z A-Z ]/))
        Setcontenterror("plz enter valid character for name")
        else
        if (rate.length == 0) 
     
        SetRateerror("plz enter character for rate");
        
        else
          if (!rate.match(/[a-z A-Z ]/))
          SetRateerror("plz enter valid character for rate")
          else
             {
        SetmedNmerror("") 
        Setcontenterror("") 
        SetRateerror("")
      const newCategory={medId:medId,medNm:medNm,catId:catId,brandId:brandId,contents:contents,rate:rate,stock:stock,BatchNo:BatchNo,manDate:manDate,expDate:expDate,gst:gst,photo:photo};
      
      fetch("http://localhost:41827/api/MedicineMaster",
      {
       method:'PUT',
       headers:{'Content-type':'application/json;charset=UTF-8'},
       body:JSON.stringify(newCategory)})
       .then(response=>response.json())
       .then(data=>
       {
         console.log(data)
         
         Navigate('/MasterList')
 
       }
       )
       .catch(error=>console.log(error));
      }
     
      };
    
  return (
    <div>
      <div className="p-3 p-lg-5 border">
      <div className="form-group row">
        <div className="col-md-12">
       <label for="brandid" className="text-black"> Medicine Id: </label>
       <input  type='text' className="form-control" onChange={(e)=>SetMedid(e.target.value)} /><br></br>
       </div></div>

       <div className="form-group row">
        <div className="col-md-12">
      <label for="brandid" className="text-black">  Name: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetMedNm(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{medNmerror}</span><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
      <label for="brandid" className="text-black"> Category Id: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetCatId(e.target.value)} /><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
     <label for="brandid" className="text-black">  Brand Id: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetBrandId(e.target.value)} /><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
     <label for="brandid" className="text-black"> Contents: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetContents(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{contentserror}</span><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
      <label for="brandid" className="text-black"> Rate: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetRate(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{Rateerror}</span><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
      <label for="brandid" className="text-black"> Stock: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetStock(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{stockerror}</span><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
      <label for="brandid" className="text-black"> Batch No:</label>
      <input  type='text' className="form-control" onChange={(e)=>SetBatchNo(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{BatchNoerror}</span><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
      <label for="brandid" className="text-black"> Manufacture Date: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetmanDate(e.target.value)} /><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
      
     <label for="brandid" className="text-black"> Expire Date: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetExpDate(e.target.value)} /><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
      
      <label for="brandid" className="text-black"> GST: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetGst(e.target.value)} /><br></br>
      </div></div>

      <div className="form-group row">
        <div className="col-md-12">
     
      <label for="brandid" className="text-black"> Photo </label>
      <input  type='text' className="form-control" onChange={(e)=>SetPhoto(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{photoerror}</span><br></br>
      </div></div>

      <button   onClick={update}>Update</button><br></br>
    </div>
    </div>
  )
}
