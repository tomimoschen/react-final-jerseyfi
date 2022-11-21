import { Link } from 'react-router-dom';
import './navbar.css'
import CartIcon from '../Cart/CartIcon';

const NavBar = () => {
    return (
                <nav>
                    <div className='logo-bg'>
                    <div className='logo'></div>
                    </div>
                    <ul>
                        <Link to= "/">Inicio</Link>
                        <Link to= "/category/selecciones">Selecciones</Link>
                        <Link to= "/category/equipos">Equipos</Link>
                        <Link to="/cart/"><CartIcon/></Link>
                    </ul>
                </nav>

    )
}

export default NavBar;
