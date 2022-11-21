import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Footer = () => {
    return (
        <>
        <footer>
            <div className='explorar'>
                <h2 className='explorar-title'>Explorar</h2>
                <ul className='ul-footer'>
                    <Link to= "/">Inicio</Link>
                    <Link to= "/category/selecciones">Selecciones</Link>
                    <Link to= "/category/equipos">Equipos</Link>
                </ul>
            </div>
            <div className="copyright">
                Jerseyfi © Creado por <a href='https://github.com/tomimoschen'>Tomás Moschen</a>
            </div>
        </footer>
        </>
        
    )
}

export default Footer