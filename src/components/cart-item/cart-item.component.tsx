import { FC , memo} from "react"
import {CartItemContainer,ItemDetails,Image,Name} from "./cart-item.styles"

export type CartItemProps ={
    name:string,
    imageUrl:string,
    price:number,
    quantity:number
}
const CartItem:FC<CartItemProps>=memo(({...cartItem})=>{
    const {name,imageUrl,price,quantity}=cartItem
    return(
    <CartItemContainer>
        <Image src={imageUrl} alt={name}/>
        <ItemDetails>
        <Name>{name}</Name>
        <span>{quantity} x ${price}</span>
        </ItemDetails>
    </CartItemContainer>
    )
}) 
export default CartItem