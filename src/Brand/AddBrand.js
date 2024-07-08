import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


export default function AddBrand() {
  const[brand_id,SetBrandId]=useState("");
    const[brand_nm,SetBrandNm]=useState("");
    const[brandnmError,SetnmError]=useState("");
    const[BrandList,SetBrandList]=useState([]);

    const Navigate=useNavigate();
    
    const insert=()=>{

      if (brand_nm.length == 0) 
       
      SetBrandNm("plz enter character for name");
      
      else
        if (!brand_nm.match(/[a-z A-Z ]/))
          SetBrandNm("plz enter valid character for name")
        else
        {
          SetnmError("")  
        const newBrand={brand_id:brand_id,brand_nm:brand_nm};
        fetch("http://localhost:41827/api/Brand",
       {
        method:'POST',
        headers:{'Content-type':'application/json;charset=UTF-8'},
        body:JSON.stringify(newBrand)})
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error));
       }
       console.log("data inserted")
       
      Navigate('/BrandList')

       };
      
  return (
    <div>
      <div className="p-3 p-lg-5 border">
     
      
      
       <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandnm" className="text-black">  Brand Name: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetBrandNm(e.target.value)}/><br></br>
      <span style={{color:"red" }}>{brandnmError}</span><br></br>
      </div></div>

      
      <button  className="btn btn-primary px-5 py-3" onClick={insert}>Insert</button><br></br>
     
              </div>
    </div>
  )
}
