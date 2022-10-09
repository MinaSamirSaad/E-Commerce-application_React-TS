import "./collection-preview.styles.scss"
import ProductCard from '../product-card/Product-card.component';
import { useNavigate } from "react-router-dom";
const CollectionPreview= ({title,items}) => {
    const navigate = useNavigate();
    const handleNavigate=()=>{
        navigate(`/shop/${title}`);
    }
    return (
        <div className='collection-preview'>
            <h1 className="title" onClick={handleNavigate}>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((_,idx)=>idx<4)
                        .map((product)=>(<ProductCard key={product.id} {...product}/>))
                }
            </div>
        </div>
    )
}
export default CollectionPreview