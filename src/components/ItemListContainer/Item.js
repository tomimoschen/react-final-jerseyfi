import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({item}) => {
    return (
        <div className="card-item" id={item.id}>
            <img src={item.img} className="card-img-item"/>
            <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <h6 className='card-text'>{item.kit}</h6>
                <p className="card-text">${item.price}</p>
                <Link to={`/item/${item.id}`} >
                    <button className="boton-item">
                        Ver 
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Item