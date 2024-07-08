import React, { useEffect } from 'react'

import { useRef,useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import {useNavigate} from 'react-router-dom'
export default function Invoice() {
  const newcart = { cartId:1,
    custId:"",
    cartDate:"",
    medId: 1, 
    medNm: "", 
    medRate:0,
    medQty:0,
    medAmt:0
  
  };

  const[cartlist,setcartlist]=useState([newcart]);
  const[gstAmount,setgstamnt]=useState(0);
  const[totalAmount,settotalamnt]=useState(0);
  const[subTotal,setsubtotal]=useState(0);
  const ShowInvoice=()=>
  {

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
  const navigate=useNavigate()

  const logout=()=>
  {
    Delete(0)
    navigate('/Home')
  }
  
const Delete=(id)=>{
  
  // console.log(id)
    fetch("http://localhost:41827/api/ViewCart/"+id,
   {method:'DELETE'})
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      
    }
    )
    .catch(error=>console.log(error));
  }
const componentPdf=useRef();

  const generatePdf=useReactToPrint(
    
    {
    content:()=>componentPdf.current,
    documentTitle:"userData",
    // onAfterPrint:()=>alert("export in pdf")

  })


  useEffect(()=>ShowInvoice,[])
  const [cnt,setcnt]=useState(0)
let subTotal1 = 0; // Initialize subtotal outside the map function
let  gstAmt=0,grandTotal=0;
  return (
    
      <div className='container'>
        <div className='invoice'>
        <div ref={componentPdf}>
        <table  className='table'>
            <tr> 
            <td><h1>Wellness Foreverda1</h1></td>
            </tr><br>
            </br>

            <tr>
                
          <td><h2><b>Invoice To</b> </h2>
          <p><b>{cartlist[0].custId}</b></p>
          <p></p></td>

<td><p><span>Invoice </span>
{cartlist[0].cartId}
</p>
<p>{cartlist[0].cartDate}</p>

</td>

            </tr>


            <tr>
                <td colSpan="2">
                <table className="table table-hover" border="2px">
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>Medicine Name</th>
        <th>Medicine Rate</th>
        <th>Medicine Quantity</th>
        <th>Medicine Amount</th>
        
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
            <tr key={index}>

              <td>{index+1}</td>
              <td>{data.medNm}</td>
              <td>{data.medRate}</td>
              <td>{data.medQty}</td>
              <td>{medAmt}</td>
             
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
  </td>
  </tr></table>

       <button onClick={generatePdf}>Export To pdf</button>
       <button onClick={logout}>Logout</button>

</div>
  </div>
  </div>
      


    
  )
}

