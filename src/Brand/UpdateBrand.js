import React, { useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom';
export default function UpdateBrand() {
  const[brand_id,SetId]=useState("");
    const[brand_nm,SetNm]=useState("");
    const[BrandnmError,SetBrandnmError]=useState("");
    const[BrandList,SetBrandList]=useState([]);

    const{bid,bnm}=useParams();
    const Navigate=useNavigate();
    const update=()=>{
      if (brand_nm.length == 0) {
        
        SetBrandnmError("plz enter character for name");
      }
      else
        if (!brand_nm.match(/[a-z A-Z ]/))
          SetBrandnmError("plz enter valid character for name")
        else
        {
          SetBrandnmError("")  

      const newBrand={brand_id:brand_id,brand_nm:brand_nm};
      fetch("http://localhost:41827/api/Brand",
     {
      method:'PUT',
      headers:{'Content-type':'application/json;charset=UTF-8'},
      body:JSON.stringify(newBrand)})
      .then(response=>response.json())
      .then(data=>
      {
        console.log(data)
        Navigate('/BrandList')

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
                  <label for="brandid" className="text-black">  Brand Id:  </label>
      <input  type='text' className="form-control" onChange={(e)=>SetId(e.target.value)} value={brand_id} /><br></br>
       </div></div>

       <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black">  Brand Name:  </label>
      <input  type='text' className="form-control" onChange={(e)=>SetNm(e.target.value)} value={brand_nm} /><br></br>
      <span style={{color:"red"}}>{BrandnmError}</span><br></br>
      </div></div>

      <button className="btn btn-primary px-5 py-3"  onClick={update}>Edit</button><br></br>
    </div>
    </div>
  )
}

