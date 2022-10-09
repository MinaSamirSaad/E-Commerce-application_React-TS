import { useContext ,useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import "./category.styles.scss"
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
            <h1 className="catigory-header">{category.toUpperCase()}</h1>
        <div className="catigory-container">
            {products&&products.map((product)=><ProductCard key={product.id}{...product}/>)}
        </div>
        </div>
    )
}

export default Category