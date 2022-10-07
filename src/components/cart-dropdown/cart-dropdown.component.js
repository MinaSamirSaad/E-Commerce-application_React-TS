import CustomButton from "../custom-button/custom-button.component"
import "./cart-dropdown.styles.scss"
import CartItem from "../cart-item/cart-item.component"
import { useContext } from "react"
import { CartContext } from './../../contexts/cart.context';
import { useNavigate } from "react-router-dom";

const CartDropdown =()=>{
    const navigate = useNavigate();
    const navigateToCheckOut =()=>navigate("/checkOut")
    const {cartItems}= useContext(CartContext)
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((cartItem)=><CartItem key={cartItem.id} {...cartItem}/>)}
               
            </div>
            <CustomButton onClick={navigateToCheckOut}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown