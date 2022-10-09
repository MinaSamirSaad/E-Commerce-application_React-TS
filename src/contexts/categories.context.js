import { createContext, useState } from 'react';
import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';
import { useEffect } from 'react';
export const CategoriesContext = createContext({
    categoriesMap:{}
});

export const CategoriesProvider =({children})=>{
    const [categoriesMap,setCategoriesMap] = useState({});
    useEffect(()=>{
        const categoriesMap = async()=>{
           const categories =await getCollectionAndDocuments();
           console.log(categories)
           setCategoriesMap(categories)
        }
        categoriesMap()
    },[])
    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
}


