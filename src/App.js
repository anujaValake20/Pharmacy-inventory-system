import logo from './logo.svg';
// import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import AddCat from './MedicineCat/AddCat';
import CatList from './MedicineCat/CatList';
import UpdateCat from './MedicineCat/UpdateCat';
import AddMaster from './MedicineMaster/AddMaster';
import AddBrand from './Brand/AddBrand';
import BrandList from './Brand/BrandList';
import UpdateBrand from './Brand/UpdateBrand';
import MasterList from './MedicineMaster/MasterList';
import UpdateMaster from './MedicineMaster/UpdateMaster';
import Receipt from './Other/Receipt';
import Retailer from './Other/Retailer';
import SaleDetails from './Other/SaleDetails';
import SaleMaster from './Other/SaleMaster';
import RetailerLogin from './RetailerLogin';
import Header from './Header';
import Footer from './Footer';
import ImageUpload from './ImageUpload';
import MedicineList from './MedicineMaster/MedicineList';
import ViewDetails from './MedicineMaster/ViewDetails';
import ViewCart from './MedicineMaster/ViewCart';
import Invoice from './MedicineMaster/Invoice';
import AdminDashboard from './AdminDashboard';
import AdminLogin from './AdminLogin';
import RetailerDashboard from './RetailerDashboard';
import Cart from './MedicineMaster/Cart';
import AddCart from './MedicineMaster/AddCart';

function App() {
  return (
    <div className="App">
            
<BrowserRouter>  

     <Header/>
      <br></br>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Header' element={<Header/>}></Route>
      
      <Route path='/CatList' element={<CatList/>}></Route>
        <Route path='/AddCat' element={<AddCat/>}></Route>
      <Route path='/UpdateCat/:cid/:cnm' element={<UpdateCat/>}></Route>

        <Route path='/BrandList' element={<BrandList/>}></Route>
        <Route path='/AddBrand' element={<AddBrand/>}></Route>
         <Route path='/UpdateBrand/:bid/:bnm' element={<UpdateBrand/>}></Route>

         <Route path='/MasterList' element={<MasterList/>}></Route>
        <Route path='/AddMaster' element={<AddMaster/>}></Route>
      <Route path='/UpdateMaster/:mid/:mnm/:cid/:cont/:Rate/:Stock/:Bno/:Mdate/:Edate/:Gst/:Photo' element={<UpdateMaster/>}></Route>

      <Route path='/Receipt/:amt' element={<Receipt/>}></Route>
      <Route path='/Retailer' element={<Retailer/>}></Route>
        <Route path='/SaleDetails' element={<SaleDetails/>}></Route>
      <Route path='/SaleMaster' element={<SaleMaster/>}></Route>
      <Route path='/RetailerLogin' element={<RetailerLogin/>}></Route>
      <Route path='/MedicineList' element={<MedicineList/>}></Route>
      <Route path='/ViewDetails/:id' element={<ViewDetails/>}></Route>
      <Route path='/Footer' element={<Footer/>}></Route>
     
      <Route path='/Invoice' element={<Invoice/>}></Route>
      <Route path='/AdminDashboard' element={<AdminDashboard/>}></Route>
      <Route path='/RetailerDashboard' element={<RetailerDashboard/>}></Route>
      <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
      <Route path='/AddCart' element={<AddCart/>}></Route>
      <Route path='/ViewCart' element={<ViewCart/>}></Route>
      </Routes>
      </BrowserRouter>
      <br></br>
     
     

    </div>
  );
}

export default App;
