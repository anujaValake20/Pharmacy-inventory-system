import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export default function UpdateCat() {
    const[catId,SetId]=useState("");
    const[idError,SetidError]=useState("")
    const[catName,SetNm]=useState("");
    const[nmError,SetnmError]=useState("");
    const[categoryList,SetcategoryList]=useState([]);

    const{cid,cnm}=useParams;

  const Navigate=useNavigate();
    
    const update=()=>{
      if (catName.length == 0) {
        
        SetnmError("plz enter character for name");
      }
      else
        if (!catName.match(/[a-z A-Z ]/))
          SetnmError("plz enter valid character for name")
        else
        {
          SetnmError("")  

      const newCategory={catId:catId,catName:catName};
      fetch("http://localhost:41827/api/MedicineCat",
     {
      method:'PUT',
      headers:{'Content-type':'application/json;charset=UTF-8'},
      body:JSON.stringify(newCategory)})
      .then(response=>response.json())
      .then(data=>
      {
        console.log(data)
        
        Navigate('/CatList')

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
      
        <label for="brandid" className="text-black">  Category Id: </label>
       <input className='form-control' type='text' onChange={(e)=>SetId(e.target.value)} value={catId}/><br></br>
       </div></div>
       
      <div className="form-group row">
                  <div className="col-md-12">
       <label for="brandid" className="text-black">  Category Name: </label>
      <input className='form-control' type='text' onChange={(e)=>SetNm(e.target.value)} value={catName}/><br></br>
      <span style={{color:"red"}}>{nmError}</span><br></br>
      </div></div>
     
    <button onClick={update}>Edit</button><br></br>
    </div>
    </div>
  )
}
