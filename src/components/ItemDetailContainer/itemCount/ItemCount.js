import React, { useState } from 'react';
import './itemCount.css';

const ItemCount = ({stock, valorInicial = 0, onAdd }) => {
    const [valor, setValor] = useState(valorInicial);
    
    return (
        <>
        <div className='contador'>
            <button type="button" className="boton-count restar" onClick={() => {
                valor > valorInicial ? setValor(valor - 1) : setValor(valorInicial)}}>
                -
            </button>
            <p> {valor} </p>
            <button type="button" className="boton-count sumar" onClick={() => {
                valor < stock ? setValor(valor + 1) : setValor(stock)}}>
                +
            </button>
        </div>
        <div>
            <button type="button" className='boton-carrito' onClick={() => {onAdd(valor)}}>
                Añadir al carrito
            </button>
        </div>
        </>
    )
}
export default ItemCount