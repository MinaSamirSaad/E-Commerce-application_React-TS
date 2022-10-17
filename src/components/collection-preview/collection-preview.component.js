import {CollectionPrviewContainer,Title, Preview} from "./collection-preview.styles.js"
import ProductCard from '../product-card/Product-card.component';
import { useNavigate } from "react-router-dom";
const CollectionPreview= ({title,items}) => {
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
                        .filter((_,idx)=>idx<4)
                        .map((product)=>(<ProductCard key={product.id} {...product}/>))
                }
            </Preview>
        </CollectionPrviewContainer>
    )
}
export default CollectionPreview