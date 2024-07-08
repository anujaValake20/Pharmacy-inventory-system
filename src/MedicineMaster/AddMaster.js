import React, { useEffect, useState } from 'react'

export default function AddMaster() {
  const[medId,SetMedid]=useState("");
  const[medNm,SetMedNm]=useState("");
  const[medNmerror,SetmedNmerror]=useState("")
  const[catId,SetCatId]=useState(1);
  const[brandId,SetBrandId]=useState("");
  const[contents,SetContents]=useState("");
  const[contentserror,Setcontenterror]=useState("")
  const[rate,SetRate]=useState("");
  const[Rateerror,SetRateerror]=useState("")
  const[stock,SetStock]=useState("");
  const[stockerror,Setstockerror]=useState("")
  const[BatchNo,SetBatchNo]=useState("");
  const[BatchNoerror,SetBatchNoerror]=useState("")
  const[manDate,SetmanDate]=useState("");
 const[expDate,SetExpDate]=useState("");
  const[gst,SetGst]=useState("");
  const[photo,SetPhoto]=useState("aaa.jpg");
 
  const[masterList,setMasterList]=useState([]);
  const[BrandList,setbrandList]=useState([]);

  const showdropdown = () => {
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
        setMasterList(json)
     });
  }
  const showdropdown1 = () => {
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
        setbrandList(json)
     });
  }

  const insert=()=>{

    if (medNm.length == 0) 
     
    SetmedNmerror("plz enter character for name");
    
    else
      if (!medNm.match(/[a-z A-Z ]/))
      SetmedNmerror("plz enter valid character for name")
      else
      if (contents.length == 0) 
     
      Setcontenterror("plz enter character for name");
      
      else
        if (!contents.match(/[a-z A-Z ]/))
        Setcontenterror("plz enter valid character for name")
        else
        if (rate.length == 0) 
     
        SetRateerror("plz enter character for rate");
        
        else
          if (!rate.match(/[0-9]/))
          SetRateerror("plz enter valid character for rate")
          else
             {
        SetmedNmerror("") 
        Setcontenterror("") 
        SetRateerror("")
        // const formData=new FormData()
        //   formData.append('medId',medId) 
        //   formData.append('medNm',medNm)
        //   formData.append('medNmerror',medNmerror)
        //   formData.append('catId',catId)
        //   formData.append('brandId',brandId)
        //   formData.append('contents',contents)
        //   formData.append('rate',rate)
        //   formData.append('stock',stock)
        //   formData.append('BatchNo',BatchNo)
        //   formData.append('manDate',manDate)
        //   formData.append('expDate',expDate)
        //    formData.append('gst',gst)
        //    formData.append('photo',photo)
      const newCategory={medId:medId,medNm:medNm,catId:catId,brandId:brandId,
        contents:contents,rate:rate,stock:stock,BatchNo:BatchNo,manDate:manDate,
        expDate:expDate,gst:gst,photo:photo};
      fetch("http://localhost:41827/api/MedicineMaster",
     {
      method:'POST',
      headers:{'Content-type':'application/json;charset=UTF-8'},
      body:JSON.stringify(newCategory)})
      .then(response=>response.json())
      .then(data=>console.log(data))
      .catch(error=>console.log(error));
     }
     
    

     };

     useEffect(() => {
      showdropdown();
      showdropdown1();

    }, []);
    
    const handleFile=(event)=>{
      SetPhoto(event.target.files[0])
    
     
        function HandleUp(){
          const formData=new FormData()
          formData.append('medId',medId) 
          formData.append('medNm',medNm)
          // formData.append('medNmerror',medNmerror)
          formData.append('catId',catId)
          formData.append('brandId',brandId)
          formData.append('contents',contents)
          formData.append('rate',rate)
          formData.append('stock',stock)
          formData.append('BatchNo',BatchNo)
          formData.append('manDate',manDate)
          formData.append('expDate',expDate)
           formData.append('gst',gst)
           formData.append('photo',photo)
          fetch('http://localhost:41827/api/MedicineMaster',
           {
            method:'POST',
             body:formData
           }
           ).then((response)=>response.json()).then(
    
            (result)=>{
               console.log('sucess',result)
             }
          )
          .catch(error=>{
         console.error("Error",error)
           })
         }
        }
  return (
    <div>
      <div className="p-3 p-lg-5 border">
      <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black"> Medicine Id: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetMedid(e.target.value)} /><br></br>
      </div></div>

      <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black"> Medicine Name: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetMedNm(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{medNmerror}</span><br></br>
      </div></div>
      <div className="form-group row">
                  <div className="col-md-12">
                  <label for="brandid" className="text-black"> Category Id: </label>
      <select className="form-control" onChange={(e) => SetCatId(e.target.value)} >
                {
                    masterList.map((data) => {
                        return (<option value={data.catId}>{data.catName}</option>)

                    })
                }
                </select><br></br> </div></div>
                
                <div className="form-group row">
                  <div className="col-md-12">
     
      <label for="brandid" className="text-black">  Brand Id:</label>
      <select className="form-control" onChange={(e) => SetBrandId(e.target.value)} >
                {
                    BrandList.map((data) => {
                        return (<option value={data.brandId}>{data.brand_nm}</option>)

                    })
                }
                </select><br></br></div></div>
                <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black">  Contents: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetContents(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{contentserror}</span><br></br>
      </div></div>
      <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black">Rate: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetRate(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{Rateerror}</span><br></br>
      </div></div>
      <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black">Stock: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetStock(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{stockerror}</span><br></br>
      </div></div>
      <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black"> Batch No: </label>
      <input  type='text'  className="form-control" onChange={(e)=>SetBatchNo(e.target.value)} /><br></br>
      <span style={{ color: "red" }}>{BatchNoerror}</span><br></br>
      </div></div>
      <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black">  Manufacture Date: </label>
     <input  type='text' className="form-control" onChange={(e)=>SetmanDate(e.target.value)} /><br></br>
     </div></div>
     <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black"> Expire Date: </label>
      <input  type='text' className="form-control" onChange={(e)=>SetExpDate(e.target.value)} /><br></br>
      </div></div>
      <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black"> GST: </label>
     <input  type='text' className="form-control" onChange={(e)=>SetGst(e.target.value)} /><br></br>
     </div></div>
     <div className="form-group row">
                  <div className="col-md-12">
      <label for="brandid" className="text-black"> Photo: </label>
      <input  type='text' className="form-control"  onChange={(e)=>SetPhoto(e.target.value)} />
      {/* <button onSubmit={FormData}>Upload</button> */}
      </div></div>

      
      <button   onClick={insert}>Insert</button><br></br>
      </div>
      
      </div> 

   
  )
}
