import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './component/Footer/Footer';
import AppDownload from './component/AppDownload/AppDownload';
function App() {
  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path ='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <AppDownload/>
    <Footer/>
    </>
    
    
  );
}

export default App;