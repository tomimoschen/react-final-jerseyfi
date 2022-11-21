import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.js';
import { getItemById } from '../../app/firebase-api';

const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [ item, setItem ] = useState({})
    useEffect(() => {
        getItemById(itemId).then(item => setItem(item))
    },[itemId])
    return (
        <> 
            <ItemDetail products={item}/>
        </>
    )
}

export default ItemDetailContainer