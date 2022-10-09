import { Route,Routes } from "react-router-dom"
import CategoriesPreview from "../categories-pr/categories-preview.component"
import Category from "../category/category.component"
 const ShopPage = () => {
    return (
        <Routes >
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}
export default ShopPage 