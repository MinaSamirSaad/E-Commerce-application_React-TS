import { useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import {CategoryContainer,CategoryHeader} from "./category.styles"
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/Product-card.component';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';
import Spinner from "../../components/spinner/spinner.component";

type CategoryRouteParams = {
    category : string;
}

const Category =()=>{
    const {category}=useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const[products,setProducts]=useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])
    return(
        <>
            <CategoryHeader>{category.toUpperCase()}</CategoryHeader>
            {
                isLoading? <Spinner/>
                :
                <CategoryContainer>
                {products&&products.map((product)=><ProductCard quantity={0} key={product.id} {...product}/>)}
                </CategoryContainer>
            }

        </>
    )
}

export default Category