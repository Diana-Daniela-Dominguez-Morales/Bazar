import React from 'react'
import './error.css';

const NotFoundPage = () => {
  return (
    <div class="error-container">
    <h1 className='error'>Error 404 - Página no encontrada</h1>
    <p className='error'>Lo sentimos, la página que estás buscando no existe.</p>
    <p className='error'><a  className='error' href="/">Volver a la página de inicio</a></p>
  </div>
  )
}

export default NotFoundPage;