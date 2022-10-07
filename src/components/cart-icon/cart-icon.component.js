import { ReactComponent as ShoppongIcon } from "../../assets/111 shopping-bag.svg"
import "./cart-icon.styles.scss"
import { useContext } from 'react';
import { CartContext } from './../../contexts/cart.context';

const CartIcon =()=>{
    const {cartOpen,setCartOpen,totalQuantity}=useContext(CartContext);
    const toggleCartOpen = ()=>setCartOpen(!cartOpen)
return(
    <div className="cart-icon-container" onClick={toggleCartOpen}>
    <ShoppongIcon className="shopping-icon"/>
    <span className="item-count">{totalQuantity}</span>
    </div>
)
}

export default CartIcon