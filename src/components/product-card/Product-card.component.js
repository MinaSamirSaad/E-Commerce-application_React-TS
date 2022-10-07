import './Product-card.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { useContext } from 'react';
import { CartContext } from './../../contexts/cart.context';

 const ProductCard = ({...product}) => {
    const {key,name,price,imageUrl}=product
    const{addItemToCart}=useContext(CartContext);
    const addProuductToCart =()=>addItemToCart(product)
    return (
        <div className='collection-item' key={key}>
            <img className='image'src={imageUrl} alt={name}/>
            <div className='collection-footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton buttonType="inverted"onClick={addProuductToCart} >Add to card</CustomButton>
        </div>
    )
}
export default ProductCard
