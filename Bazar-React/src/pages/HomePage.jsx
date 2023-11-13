import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import Puntuacion from '../components/Puntuacion';

const HomePage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();

  const [productos, setProductos] = useState(null);
  const onSubmit = (data) => {
    const producto = data.search;
    navigate(`/items/search/${producto}`);
  };
  
  const fetchData = async (searchTerm) => {
    try {
      const res = await axios.get(`https://localhost:7223/api/Productos/search/${searchTerm}`);
      setProductos(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(watch('search'));
  }, [watch('search')]);

  const handleInputChange = (e) => {
    // Add a delay of 300 milliseconds before making the API call
    const searchTerm = e.target.value;
    setTimeout(() => {
      fetchData(searchTerm);
    }, 300);
  };
 
  return (
    <div className='container-fluid d-flex flex-column align-items-center justify-content-center text-center'>
    <h1>Bazar Online</h1>
    <img src="https://i.ibb.co/NLPBqcK/logo.png" alt="" width="200" height="200" />
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className='form-control' type="text" placeholder="Buscar:" {...register('search')} onChange={handleInputChange} />
      <br /><br />
      <input type="submit" className="btn btn-info" value='Buscar' />
    </form>
    <Outlet />
    <br />
    <hr />

    <div className='container-fluid d-flex flex-wrap justify-content-around'>
      {productos && productos.length > 0 ? (
        productos.map((producto) => (
          <div key={producto.id} className="col-md-3 m-2">
            <div className="card">
              <img src={producto.thumbnail} className="card-img-top" width="500" height="200" alt={producto.titulo} />
              <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">Categoria: {producto.categoria}</p>
                <div className="row">
                  <div className="col-6">
                    <h6><b>Precio: ${producto.precio} </b></h6>
                  </div>
                  <div className="col-6">
                    <Puntuacion rating={producto.rating} />
                  </div>
                </div>
                <Link to={`/item/${producto.id}`} className="btn btn-primary">
                  Detalles
                </Link>
              </div>
              <div className="btn-group">
                    <button className="btn btn-primary" >
                      Compartir en Facebook
                    </button>
                    <button className="btn btn-info">
                      Compartir en Twitter
                    </button>
                  </div>
            </div>
          </div>
        ))
      ) : (
        <p>Buscar productos..</p>
      )}
    </div>
  </div>
  );
};

export default HomePage;
