import React, { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
// import { CartContext } from './CartContext';
// import { useContext } from 'react';
//  import image from '../../public/images/hero_1.jpg';
import image1 from './Images/product_05.png';
export default function ViewDetails() {
    const[medobj,setMedobj]=useState({}); 
    const  [path,setpath]=useState("")
    const  [qty,setQty]=useState(1)
    const {id}=useParams();
   // const navigate=useNavigate();
    // const { addToCart } = useContext(CartContext);
    const MedicineList = () => {
        fetch("http://localhost:41827/api/MedicineMaster/"+id,
          {
            method: 'GET',
          headers: {
             "Content-type": "application/json ;charset=uTF-8"
          }
         }).then(Response => {
            return Response.json()
          }).then(json => {
            console.log(json)
            setMedobj(json)
        
         });
      }
      const navigate=useNavigate()
const [amt,setamt]=useState(qty)
      const AddCart=()=>
      {
        let am=parseInt(medobj.rate)*parseInt(qty)
        setamt(am)
        console.log("Amt="+amt)
        console.log("Qty="+qty);

        const newcart = { cartId:1,
          custId:"ABCD",
          cartDate:new Date(),
          medId: id, 
          medNm: medobj.medNm, 
          medRate:medobj.rate,
          medQty:qty,
          medAmt:am
        
        };
          fetch("http://localhost:41827/api/ViewCart",
            {
              method: 'POST',
              headers: { 'Content-type': 'application/json;charset=UTF-8' },
              body: JSON.stringify(newcart)
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
          console.log("data inserted")
          //  navigate('/MedicineList');
          navigate('/ViewCart')

          
        
      }

     useEffect(()=>MedicineList,[])
      
  return (
    <div>
    <div className="card mb-12">
  <div className="row g-0">
    <div className="col-md-4">
        <br></br><br></br>
    {/* <img src={image1} alt='hero' height='500px' width='500px'/> */}
    <img src={"http://localhost:41827/Upload/"+medobj.photo} className="img-fluid rounded-start" height="500px" width="500px"/>
      {/* <img src="..." className="img-fluid rounded-start" alt="..."/> */}
      
    </div>
    <div className="col-md-8">
      <div className="card-body">
        {/* <h5 className="card-title">Name</h5> */}

        <h3>Name:{medobj.medNm}</h3>
        <h3>CatId:{medobj.catId}</h3>
        <h3>BrandId:{medobj.brandId}</h3>
        <h3>Contents:{medobj.contents}</h3>
        <h3>Rate:{medobj.rate}</h3>
        <h3>Stock:{medobj.stock}</h3>
        <h3>Batch No:{medobj.BatchNo}</h3>
        <h3>manDate:{medobj.manDate}</h3>
        <h3>ExpDate:{medobj.expDate}</h3>
        <h3>Gst:{medobj.gst}</h3>
         
        
   <select onChange={(e)=>setQty(e.target.value)}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
   </select>

        {/* <button onClick={()=>addToCart({"id":medobj.medId,"qty":qty,"rate":medobj.rate})}>Add to Cart</button> */}
     {/* <button onClick={()=>CartShow()}>Add to Cart</button> */}
     <button onClick={AddCart}>Add to cart</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
