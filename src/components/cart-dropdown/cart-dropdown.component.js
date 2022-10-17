import CustomButton from "../custom-button/custom-button.component"
import {CartDropdownContainer,CartItems,EmptyMessage} from "./cart-dropdown.styles.js"
import CartItem from "../cart-item/cart-item.component"
import { useContext } from "react"
import { CartContext } from './../../contexts/cart.context';
import { useNavigate } from "react-router-dom";

const CartDropdown =()=>{
    const navigate = useNavigate();
    const navigateToCheckOut =()=>navigate("/checkOut")
    const {cartItems}= useContext(CartContext)
    return(
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length?cartItems.map((cartItem)=>(<CartItem key={cartItem.id} {...cartItem}/>)):(<EmptyMessage>YOUR CART IS EMPTY</EmptyMessage>)}
                 
            </CartItems>
            <CustomButton onClick={navigateToCheckOut}>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown