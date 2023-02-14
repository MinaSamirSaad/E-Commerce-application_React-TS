import {CartIconContainer,ShoppingIcon,ItemCount} from "./cart-icon.styles"
import { useSelector,useDispatch } from "react-redux";
import { selectCartCount ,selectIsCartOpen} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon =()=>{
    const dispatch = useDispatch()
    const totalQuantity = useSelector(selectCartCount)
    const cartOpen = useSelector(selectIsCartOpen);
    const toggleCartOpen = ()=>dispatch(setIsCartOpen(!cartOpen))
return(
    <CartIconContainer onClick={toggleCartOpen}>
    <ShoppingIcon/>
    <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
)
}

export default CartIcon