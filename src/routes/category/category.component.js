import { useContext ,useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import {CatigoryContainer,CatigoryHeader} from "./category.styles.js"
import { CategoriesContext } from './../../contexts/categories.context';
import ProductCard from './../../components/product-card/Product-card.component';

const Category =()=>{
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
    const[products,setProducts]=useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])
    return(
        <div>
            <CatigoryHeader>{category.toUpperCase()}</CatigoryHeader>
        <CatigoryContainer>
            {products&&products.map((product)=><ProductCard key={product.id}{...product}/>)}
        </CatigoryContainer>
        </div>
    )
}

export default Category