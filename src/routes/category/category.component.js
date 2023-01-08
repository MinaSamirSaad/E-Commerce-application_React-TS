import { useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import {CategoryContainer,CategoryHeader} from "./category.styles.js"
import { useSelector } from 'react-redux';
import ProductCard from './../../components/product-card/Product-card.component';
import { selectCategoriesMap } from './../../store/categories/category.selector';

const Category =()=>{
    const {category}=useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const[products,setProducts]=useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])
    return(
        <div>
            <CategoryHeader>{category.toUpperCase()}</CategoryHeader>
        <CategoryContainer>
            {products&&products.map((product)=><ProductCard key={product.id}{...product}/>)}
        </CategoryContainer>
        </div>
    )
}

export default Category