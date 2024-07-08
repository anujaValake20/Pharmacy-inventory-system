import React, { useState } from 'react'
export default function AddCat() {
    const[catId,SetId]=useState("");
     const[catName,SetNm]=useState("");
    const[nmError,SetnmError]=useState("");
    const[categoryList,SetcategoryList]=useState([]);
    
    const insert=()=>{

      if (catName.length == 0) 
       
      SetnmError("plz enter character for name");
      
      else
        if (!catName.match(/[a-z A-Z ]/))
          SetnmError("plz enter valid character for name")
        else
        {
          SetnmError("")  
        const newCategory={catId:catId,catName:catName};
        fetch("http://localhost:41827/api/MedicineCat",
       {
        method:'POST',
        headers:{'Content-type':'application/json;charset=UTF-8'},
        body:JSON.stringify(newCategory)})
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
<label for="brandid" className="text-black">  Name: </label>
<input  type='text' className="form-control" onChange={(e)=>SetNm(e.target.value)}/><br></br>
<span style={{ color: "red" }}>{nmError}</span><br></br>
</div>  
</div>

<button   onClick={insert}>Insert</button><br></br>

        </div>
    </div>
  


    
  )
}
