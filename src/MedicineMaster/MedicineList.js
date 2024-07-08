import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MedicineList() {
    const[medicinelist,setMedicinelist]=useState([[]]);

    
    const MedicineList = () => {
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
            setMedicinelist(json)
         });
        
      }

      const navigate=useNavigate();

      const gotoaddViewDetails=(id)=>
      {
        navigate('/ViewDetails/'+id)
      }
  
      useEffect(()=>MedicineList,[])
  return (
    <div className='container'>
        <div className='row'>
      
       {
        medicinelist.map((data)=>
        {var ph="http://localhost:41827/Upload/"+data.photo

            return(
          
          <div className='col-md-4'>
         <img src={ph} height="200px" width="200px"/>
           
         <h4>Name:{data.medNm}</h4>
         <h4>Rate:{data.rate}</h4> 
        
         <button onClick={()=>gotoaddViewDetails(data.medId)}>ViewDetails </button> 
        
         </div>
         
          )
           
        })
        
       
       }


    
    </div>
    </div>
  )
}
