import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "../components/Cart/CartWidget";
import CartProvider from "../components/context/CartContext";
import Home from '../pages/Home'
import Checkout from "../components/Checkout/Checkout";

const Router = () => {
    return(
    <>
        <CartProvider>
            <BrowserRouter>
                <Routes >
                    <Route element={<Layout />}>
                        <Route path="/" index element={<Home />}/>
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route paht="/productos/" element={<Home/>}/>
                        <Route path="/cart/" element={<CartWidget/>} />
                        <Route path="/checkout" element={<Checkout/>} />
                        <Route path="*" element={<h1>Error 404</h1> }/> 
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </>
    )
}

export default Router
