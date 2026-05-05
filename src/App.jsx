
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RenterHome from './Renter/Pages/RenterHome'
import TipsandUses from './Renter/Pages/TipsandUses'
import ProductAddForm from './Renter/Pages/ProductAddForm'
import AllProducts from './Renter/Pages/AllProducts'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<RenterHome/>}/>
       <Route path='/tipsnaduses' element={<TipsandUses/>}/>
       <Route path='/productaddform' element={<ProductAddForm/>}/>
       <Route path='/allproducts' element={<AllProducts/>}/>

     </Routes>
    </>
  )
}

export default App
