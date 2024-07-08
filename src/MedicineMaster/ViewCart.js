
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function ViewCart() 
{
const[cartlist,setcartlist]=useState([]);
const[gstAmount,setgstamnt]=useState(0);
const[totalAmount,settotalamnt]=useState(0);
const[subTotal,setsubtotal]=useState(0);

  const show = () => {
    fetch("http://localhost:41827/api/ViewCart",
      {
        method: 'GET',
      headers: {
         "Content-type": "application/json ;charset=uTF-8"
      }
     }).then(Response => {
        return Response.json()
      }).then(json => {
        console.log(json)
        setcartlist(json)
     });
}

const Delete=(id)=>{
  
  // console.log(id)
    fetch("http://localhost:41827/api/ViewCart/"+id,
   {method:'DELETE'})
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      show()
    }
    )
    .catch(error=>console.log(error));
  }
 const Navigate=useNavigate();

const CheckOut=()=>{

    Navigate('/Receipt/'+grandTotal)
}
const Search=()=>{
  Navigate('/MedicineList')
}
useEffect(()=>show,[])

let subTotal1 = 0;
let  gstAmt=0,grandTotal=0

return (
  <div>
      
      <br></br>
      
  <table className="table table-hover" border="2px">
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>Medicine Name</th>
        <th>Medicine Rate</th>
        <th>Medicine Quantity</th>
        <th>Medicine Amount</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
      {
        cartlist.map((data,index) => {
          const medAmt = parseInt(data.medRate) * parseInt(data.medQty); // Calculate medicine amount for each item
          subTotal1 += medAmt; // Accumulate subtotal
           gstAmt = 0.05 * subTotal1; // Calculate GST amount (5%)
          grandTotal = subTotal1 + gstAmt; // Calculate grand total

          return (
            <tr key={data.cartId}>
              <td>{index+1}</td>
              <td>{data.medNm}</td>
              <td>{data.medRate}</td>
              <td>{data.medQty}</td>
              <td>{medAmt}</td>
              <td>
                <button onClick={() => Delete(data.cartId)}>Cancel</button>
              </td>
            </tr>
          );
        })
      }
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="4">Subtotal:</td>
        <td>{subTotal1}</td>
      </tr>
      <tr>
        <td colSpan="4">GST (5%):</td>
        <td>{gstAmt}</td>
      </tr>
      <tr>
        <td colSpan="4">Grand Total:</td>
        <td>{grandTotal}</td>
      </tr>
    </tfoot>
  </table>
<button onClick={CheckOut}>CheckOut</button>
<button onClick={Search}>Search  Another</button>

</div>
)
    }
  
  
 



