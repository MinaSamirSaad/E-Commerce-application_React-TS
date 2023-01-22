import {CheckOutContainer,CheckoutHeader,HeaderBlock,TotalPriceSpan} from "./CheckOut.styles.js"
import CheckOutItem from "../../components/checkOut-item/checkOut-item.component";
import { useSelector } from "react-redux";
import { selectCartTotal,selectCartItems } from './../../store/cart/cart.selector';

const CheckOut =()=>{
const cartItems=useSelector(selectCartItems)
const totalPrice=useSelector(selectCartTotal)
return(
    <CheckOutContainer>
        <CheckoutHeader>
        <HeaderBlock>
            <span> Product</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Remove</span>
        </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem)=><CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
        <TotalPriceSpan >Total:${totalPrice}</TotalPriceSpan>
    </CheckOutContainer>
)
}

export default CheckOut