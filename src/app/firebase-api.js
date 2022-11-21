import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const createItem = async(obj) => {
    const colRef = collection(db, 'Ordenes de compra');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'selecciones');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems= async ()  => {
    const colRef = collection(db, 'selecciones');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (itemId) => {
    const colRef = collection(db, 'selecciones');
    const result = await getDocs(query(colRef, where('', '==', itemId)));
    return getArrayFromCollection(result);
}

export const getCollectionList = async () => {
    const colRef = collection (db, 'categories')
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result)
}

export const getItemById = async (itemId) => {
    const colRef = collection(db, 'selecciones');
    const result = await getDoc(doc(colRef, itemId));
    return result.data();
}



// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'Velas');
    await deleteDoc(doc(colRef, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}