import React, { useState, createContext } from 'react'

export const CartContext = createContext()

function CartProvider ({children}) {
    const [carrito, setCart] = useState([])
    const addToCart = (item, quantify) => {
        if(productInCart(item.id)){
            setCart(carrito.map(product => {
                return product.id === item.id ? {...product, quantify : product.quantify + quantify} : product}))
        } else {
            setCart([...carrito, {...item, quantify}])
        }
    }
    const totalPrice = () => {
        return carrito.reduce((prev, act) => prev + act.quantify * act.price, 0)
    }
    const totalProducts = () => carrito.reduce((acumulador, actualProduct) => acumulador + actualProduct.quantify, 0)
    const cleanCart = () => setCart([])
    const productInCart = (id) => carrito.find(product => product.id === id) ? true : false
    const removeProduct = (id) => setCart(carrito.filter(product => product.id !==id))


    const context = {
        addToCart, 
        cleanCart, 
        productInCart,
        removeProduct,
        totalPrice,
        totalProducts,
        carrito, 

    }

    console.log('productos', carrito)
    return( 
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider