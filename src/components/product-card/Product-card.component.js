import  {CollectionItem,CollectionFooter,ProductName,ProductPrice} from './Product-card.styles.js'
import CustomButton,{BUTTON_TYPE_CLASSES} from '../custom-button/custom-button.component';
import { useContext } from 'react';
import { CartContext } from './../../contexts/cart.context';

 const ProductCard = ({...product}) => {
    const {key,name,price,imageUrl}=product
    const{addItemToCart}=useContext(CartContext);
    const addProuductToCart =()=>addItemToCart(product)
    return (
        <CollectionItem key={key}>
            <img src={imageUrl} alt={name}/>
            <CollectionFooter>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </CollectionFooter>
            <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted}onClick={addProuductToCart} >Add to card</CustomButton>
        </CollectionItem>
    )
}
export default ProductCard
