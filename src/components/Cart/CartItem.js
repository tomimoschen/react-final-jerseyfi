import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'

const CartItem = ({product}) => {
  const {removeProduct} = useContext(CartContext)
  return (
    <>
      <div className="productInCart" key={product.id}>
        <div>
          <img className="imgProductInCart" src={product.img}/>
        </div>
        <div className="detailsProductInCart">
          <h4 className="titleProductInCart">{product.title}</h4>
          <h5> Cantidad: {product.quantify} </h5>
          <h5> Subtotal: ${product.quantify * product.price}</h5>
        </div>
        <div>
          <button onClick={() => removeProduct(product.id)} className='boton-cart'> Eliminar </button>
        </div>
      </div>

    </>
  )
}

export default CartItem