import { Route,Routes } from "react-router-dom"
import CategoriesPreview from "../categories-pr/categories-preview.component"
import Category from "../category/category.component"
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
 const ShopPage = () => {
const dispatch = useDispatch()
useEffect(()=>{
       dispatch(fetchCategoriesStart())
},[dispatch])
    return (
        <Routes >
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}
export default ShopPage 