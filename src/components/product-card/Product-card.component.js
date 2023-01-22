import  {CollectionItem,CollectionFooter,ProductName,ProductPrice} from './Product-card.styles.js'
import CustomButton,{BUTTON_TYPE_CLASSES} from '../custom-button/custom-button.component';
import { addItemToCart } from '../../store/cart/cart.action.js';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";

 const ProductCard = ({...product}) => {
    const cartItems = useSelector(selectCartItems)
    const {key,name,price,imageUrl}=product
    const dispatch = useDispatch();
    const addProductToCart =()=>dispatch(addItemToCart(cartItems,product))
    return (
        <CollectionItem key={key}>
            <img src={imageUrl} alt={name}/>
            <CollectionFooter>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </CollectionFooter>
            <CustomButton buttonType={BUTTON_TYPE_CLASSES.inverted}onClick={addProductToCart} >Add to card</CustomButton>
        </CollectionItem>
    )
}
export default ProductCard
