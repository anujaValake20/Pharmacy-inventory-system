import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function CatList() {
    const[catlist,Setcatlist]=useState([]);

    const show = () => {
        fetch("http://localhost:41827/api/MedicineCat",
          {
            method: 'GET',
          headers: {
             "Content-type": "application/json ;charset=uTF-8"
          }
         }).then(Response => {
            return Response.json()
          }).then(json => {
            console.log(json)
            Setcatlist(json)
         });
    }


   const Navigate=useNavigate();
   const gotoaddcat=(cid,cnm)=>
    {
      Navigate('/AddCat')
    }

    
    const gotoeditcat=(cid,cnm)=>
    {
      Navigate('/UpdateCat/'+cid+"/"+cnm)
      // Navigate('/UpdateBrand/'+bid+"/"+bnm)
      
    }


    const Delete=(id)=>{
  
      // console.log(id)
        fetch("http://localhost:41827/api/MedicineCat/"+id,
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
  return (
    <div>
       <button  onClick={gotoaddcat}>Add New Cateogory</button><br></br>
       <br/>
<div className='table-responsive-lg'>
      <table className=" table table-hover" border="2px">
        
        <tr>
          <th>Category Id</th>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>

          
        </tr>
        
        {
          catlist.map((data) => {
            return (<tr><td>{data.catId}</td>
              <td>{data.catName}</td>
              <td><button  onClick={()=>gotoeditcat(data.catId,data.catName)}>Edit</button></td>         
              <td><button onClick={()=>Delete(data.catId)}>Delete</button></td>  
            </tr>);
          })
        }
        </table> 
        </div>

    </div>
  )
}
