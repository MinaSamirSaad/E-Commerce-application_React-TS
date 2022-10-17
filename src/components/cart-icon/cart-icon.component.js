import {CartIconContainer,ShopingIcon,ItemCount} from "./cart-icon.styles.js"
import { useContext } from 'react';
import { CartContext } from './../../contexts/cart.context';

const CartIcon =()=>{
    const {cartOpen,setCartOpen,totalQuantity}=useContext(CartContext);
    const toggleCartOpen = ()=>setCartOpen(!cartOpen)
return(
    <CartIconContainer onClick={toggleCartOpen}>
    <ShopingIcon/>
    <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
)
}

export default CartIcon