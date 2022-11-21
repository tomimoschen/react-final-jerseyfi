import React, { useState , useEffect} from 'react';
import ItemList from './ItemList';
import './itemListContainer.css'
import { useParams } from 'react-router-dom';
import { getItems } from '../../app/firebase-api';


const ItemListContainer = () => {
    const [ productos, setProductos ] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
        if(categoryId){
            getItems()
            .then(res => setProductos(res.filter((res) => res.category === categoryId)))
        }else{
            getItems()
            .then(res => setProductos(res))
        }
        
    },[categoryId])

    return (
        <>  
            <div className='cardContainer'>
            <ItemList productos={productos}/>
            </div>
        </>
    )
}
export default ItemListContainer