import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import NotFoundPage from './pages/NotFoundPage';
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path='/' element ={ <HomePage/>}/>
          <Route path='/items/search/:query' element ={<Productos/>}/>
          <Route path='/item/:id' element ={<DetalleProducto/>}/>  
          <Route path='*' element ={ <NotFoundPage/>}/>
      </Routes>
      
    </BrowserRouter>
    
  )
}

export default App