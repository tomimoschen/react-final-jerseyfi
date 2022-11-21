import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css'

const CartEmpty = () => {
  return (
    <>
      <h1>Carrito</h1>
      <div className='cartEmptyContainer'>
        <div className='cartEmpty'>
          No hay productos en el carrito.
        </div>
        <Link to='/'>
          <button className='boton-cart'>
            Añadir productos
          </button>
        </Link>
      </div>
    </>
  )
}

export default CartEmpty