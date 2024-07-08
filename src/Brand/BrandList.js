import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export default function BrandList() {
  
  const[BrandList,SetBrandlist]=useState([]);
  
 
    const show = () => {
        fetch("http://localhost:41827/api/Brand",
          {
            method: 'GET',
          headers: {
             "Content-type": "application/json ;charset=uTF-8"
          }
         }).then(Response => {
            return Response.json()
          }).then(json => {
            console.log(json)
            SetBrandlist(json)
         });
    }

    const Navigate=useNavigate();
   
   const gotoaddBrand=()=>
    {
      Navigate('/AddBrand')
    }

    
    const gotoeditbrand=(bid,bnm)=>
    {
      Navigate('/UpdateBrand/'+bid+"/"+bnm)
      
    }


    const Delete=(id)=>{
  
      // console.log(id)
        fetch("http://localhost:41827/api/Brand/"+id,
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
      <button onClick={gotoaddBrand}>Add New Brand</button><br></br>
<br></br>
      <table  className=" table table-hover" border="2px">
        
        <tr>
          <th>Brand Id</th>
          <th>Brand Name</th>
          <th>Edit</th>
          <th>Delete</th>

          
        </tr>
        
        {
          BrandList.map((data) => {
            return (<tr><td>{data.brand_id}</td>
              <td >{data.brand_nm}</td>
              <td><button  onClick={()=>gotoeditbrand(data.brand_id,data.brand_nm)}>Edit</button></td>         
              <td><button  onClick={()=>Delete(data.brand_id)}>Delete</button></td>  
            </tr>);
          })
        }
        </table> 
    </div>
  )
}
