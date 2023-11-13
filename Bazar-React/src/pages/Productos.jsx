import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";
import Puntuacion from '../components/Puntuacion';

const Productos = () => {
  const { query } = useParams();
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://localhost:7223/api/Productos/search/${query}`);
        setProductos(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="container-fluid">
      <h1>Productos buscados</h1>
      <div className="d-flex flex-wrap">
        {productos && productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className="card m-2" style={{ width: '18rem' }}>
              <img src={producto.thumbnail} className="card-img-top" alt={producto.titulo} />
              <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">Categoria: {producto.categoria}</p>
                <div className="row">
                  <div className="col-6">
                    <h6>
                      <b>Precio: ${producto.precio} </b>
                    </h6>
                  </div>
                  <div className="col-6">
                    <Puntuacion rating={producto.rating} />
                  </div>
                </div>
                <div className="btn-group">
                    <button className="btn btn-primary" >
                      Compartir en Facebook
                    </button>
                    <button className="btn btn-info">
                      Compartir en Twitter
                    </button>
                  </div>
                <Link to={`/item/${producto.id}`} className="btn btn-primary">
                  Detalles
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Productos;
