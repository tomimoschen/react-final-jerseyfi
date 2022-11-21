import React, { useContext, useState } from 'react';
import ItemCount from './itemCount/ItemCount';
import { Link } from 'react-router-dom';
import './itemDetail.css';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

const ItemDetail = ( { products } ) => {
    const [valor, setValor] = useState(true)
    const {addToCart} = useContext(CartContext)
    function onAdd(valor){
        if(valor < 1){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                background: '#fff',
                color: 'black',  
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: false,
            })
            Toast.fire({
                icon: 'error',
                title: 'No añadiste ningún producto'
            });
        }else{
            addToCart(products, valor)
            Swal.fire(`${valor} Producto(s) añadido(s)`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: false,
                });
                setValor(false)
        }
    }
    return (
    <>
        <div class="card-detail-container">
            <div class="card-detail" key={products.id}>
                <img src={products.img} class="card-img-detail" alt="" /> 
                <div class="card-body">
                    <h3 className="card-title-detail"> {products.name} </h3>
                </div>
            </div>
            
            <div className='card-detail-compra'>
                <div class="card-info">
                    <p className='info'>Camiseta equipación {products.kit} de {products.name}, Mundial 2022. Marca {products.brand}</p>
                    <p className="card-price"> $ {products.price} </p>
                </div>
                {
                        valor ? 
                        <ItemCount stock={products.stock} onAdd={onAdd}/>
                        : 
                        <div>
                            <Link to='/cart/'>
                                <button className='boton-detail'>
                                    Terminar compra
                                </button>
                            </Link>
                            <Link to='/'>
                                <button className='boton-detail'>
                                    Continuar comprando
                                </button>
                            </Link>
                        </div>
                    }
            </div>
        </div>
        </>
    )
}

export default ItemDetail