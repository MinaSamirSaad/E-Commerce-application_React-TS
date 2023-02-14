import {CheckOutItemContainer,ImageContainer,Image,CustomWidth,Quantity,Arrow,Value,RemoveButton} from "./checkOut-item.styles"
import { useDispatch } from "react-redux";
import { addItemToCart ,removeItemFromCart,clearItemFromCart} from '../../store/cart/cart.action';
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";
import { FC } from 'react';
const CheckOutItem:FC<CartItem&{key:number}>=(cartItem)=>{
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
 const {name,imageUrl,price,quantity}=cartItem
 return(
    <CheckOutItemContainer>
        <ImageContainer>
        <Image src={imageUrl} alt={name}/>
        </ImageContainer>
        <CustomWidth>{name}</CustomWidth>
        <Quantity>
            <Arrow onClick={()=>dispatch(removeItemFromCart(cartItems,cartItem))}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow  onClick={()=>dispatch(addItemToCart(cartItems,cartItem))}>&#10095;</Arrow>
        </Quantity>
        <CustomWidth> ${price}</CustomWidth>
        <RemoveButton onClick={()=>dispatch(clearItemFromCart(cartItems,cartItem))}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
 )

}
export default CheckOutItem