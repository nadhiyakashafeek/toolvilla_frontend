
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RenterHome from './Renter/Pages/RenterHome'
import TipsandUses from './Renter/Pages/TipsandUses'
import ProductAddForm from './Renter/Pages/ProductAddForm'
import AllProducts from './Renter/Pages/AllProducts'
import ViewProduct from './Buyer/Pages/ViewProduct'
import ProductList from './Renter/Pages/ProductList'
import Dashboard from './Renter/Pages/Dashboard'
import LandingPage from './Buyer/Pages/LandingPage'
import Auth from './Pages/Auth'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<RenterHome/>}/>
       <Route path='/tipsnaduses' element={<TipsandUses/>}/>
       <Route path='/addform' element={<ProductAddForm/>}/>
       <Route path='/allproducts' element={<AllProducts/>}/>
       <Route path='/viewproduct' element={<ViewProduct/>}/>
       <Route path='/productlist' element={<ProductList/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/buyerhome' element={<LandingPage/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/login' element={<Auth/>}/>





     </Routes>
    </>
  )
}

export default App
