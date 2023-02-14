import CustomButton from "../custom-button/custom-button.component"
import {CartDropdownContainer,CartItems,EmptyMessage} from "./cart-dropdown.styles"
import CartItem from "../cart-item/cart-item.component"
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const CartDropdown =()=>{
    const navigate = useNavigate();
    const navigateToCheckOut =()=>navigate("/checkOut")
    const cartItems= useSelector(selectCartItems)
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