import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Link } from 'react-router-dom'
import Puntuacion from '../components/Puntuacion';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://localhost:7223/api/Productos/${id}`);
        setProducto(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  // Handle the case where producto is null or undefined
  if (!producto || producto.length === 0) {
    return <div>Loading...</div>; // or any other appropriate loading or error handling
  }

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-center" >
      <h1></h1>
      <div className="row">
        <div key={producto[0].id} className="container-fluid">
          <div className="card">

            <div className="card-body">
              <div className="row">
                {producto[0].imagen &&
                  producto[0].imagen.split(',').map((url, index) => (
                    <div key={index} className="col-md-3">
                      <img src={url.trim()} className="img-fluid mb-2" alt={`Product Image ${index + 1}`} />
                    </div>
                  ))}
              </div>
              <h3 className="card-title">{producto[0].titulo}</h3>
              <p className="card-text">{producto[0].descripcion}</p>
              <p className="card-text">
                Categoria: {producto[0].categoria}
                <br />
                Cantidad disponible: {producto[0].stock}
              </p>
              <div className="row">
                  <div className="col-6">
                    <h6>
                      <b>Precio: ${producto[0].precio} </b>
                    </h6>
                  </div>
                  <div className="col-6">
                    <Puntuacion rating={producto[0].rating} />
                  </div>
                </div>
            </div>
            
          <button className='btn btn-info'>Comprar</button>
          </div>
          <br />
        </div>
      </div>
      <Link to={`/`} className="btn btn-primary">
        Regresar
      </Link>
    </div>
  );
};

export default DetalleProducto;
