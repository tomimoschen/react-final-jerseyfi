import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import './cart.css'

const CartItemList = () => {
    const {carrito, totalPrice, cleanCart} = useContext(CartContext)

    return (
        <>  
            <div>
                <Link to='/'>
                    <button className='boton-cart'> 
                        Añadir más productos 
                    </button>  
                </Link>
            </div>         
            { carrito.map(product => <CartItem key={product.id} product={product}/> )} 
            <div className='moreProducts'>
                <Link to='/checkout'>
                    <button className='boton-cart'> Finalizar compra </button>
                </Link>
                <button onClick={() => cleanCart()} className='boton-cart'> Eliminar productos </button>
            </div>
            <h4 className='totalPrice'> Total: $ { totalPrice() } </h4>

        </>
    )
}

export default CartItemList