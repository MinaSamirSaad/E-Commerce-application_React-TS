import {CollectionPrviewContainer,Title, Preview} from "./collection-preview.styles"
import ProductCard from '../product-card/Product-card.component';
import { useNavigate } from "react-router-dom";
import { Category } from "../../store/categories/category.types";
import { FC } from "react";
const CollectionPreview:FC<Category&{key:string}>= ({title,items}) => {
    const navigate = useNavigate();
    const handleNavigate=()=>{
        navigate(`/shop/${title}`);
    }
    return (
        <CollectionPrviewContainer>
            <Title onClick={handleNavigate}>{title.toUpperCase()}</Title>
            <Preview>
                {
                    items
                        .filter((_,idx:number)=>idx<4)
                        .map((product)=>(<ProductCard quantity={0} key={product.id} {...product}/>))
                }
            </Preview>
        </CollectionPrviewContainer>
    )
}
export default CollectionPreview