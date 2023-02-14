import  {CollectionItem,CollectionFooter,ProductName,ProductPrice} from './Product-card.styles'
import CustomButton,{BUTTON_TYPE_CLASSES} from '../custom-button/custom-button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from '../../store/cart/cart.types';
import { FC } from 'react';
 const ProductCard:FC<CartItem&{key:number}> = ({...product}) => {
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
