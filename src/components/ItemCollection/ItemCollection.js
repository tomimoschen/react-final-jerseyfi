import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCollection.css'


const ItemCollection = () => {
    return (
        <>
            <div className="collection-card">
                <div className='collection-card-img selecciones'>
                    <h5 className="collection-title">Selecciones Nacionales</h5>
                    <Link to={`/category/selecciones`} >
                        <button className="boton">
                            Ir a comprar
                        </button>
                    </Link>
                </div>
            </div>
            <div className="collection-card">
                <div className='collection-card-img equipos'>
                    <h5 className="collection-title">Equipos Europeos</h5>
                    <Link to={`/category/equipos`} >
                        <button className="boton">
                            Ir a comprar
                        </button>
                    </Link>
                    </div>
                </div>
        </>
    )
}

export default ItemCollection