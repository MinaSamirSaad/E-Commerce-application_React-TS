import "./CheckOut.styles.scss"
import { useContext } from "react";
import CheckOutItem from "../../components/checkOut-item/checkOut-item.component";
import { CartContext } from './../../contexts/cart.context';

const CheckOut =()=>{
const {cartItems,totalPrice}=useContext(CartContext)
return(
    <div className="checkout-container">
        <div className="checkout-header">
        <div className="header-block">
            <span> Product</span>
        </div>
        <div className="header-block">
            <span>Description</span>
        </div>
        <div className="header-block">
            <span>Quantity</span>
        </div>
        <div className="header-block">
            <span>Price</span>
        </div>
        <div className="header-block">
            <span>Remove</span>
        </div>
        </div>
        {cartItems.map((cartItem)=><CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
        <span className="total">Total:${totalPrice}</span>
    </div>
)
}

export default CheckOut