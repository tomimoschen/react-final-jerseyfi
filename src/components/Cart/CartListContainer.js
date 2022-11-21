import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartEmpty from './CartEmpty'
import CartItemList from './CartItemList';

const CartListContainer = () => {
    const {carrito} = useContext(CartContext)
    return (
        <> 
            <h1>Carrito</h1>
        <div className="contenedorListCarrito">
            {carrito.length > 0 ? <CartItemList/> : <CartEmpty/>}
        </div>
        </>
    )
}

export default CartListContainer