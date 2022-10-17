import {CheckOutItemContainer,ImageContainer,Image,CustomWidth,Quantity,Arrow,Value,RemoveButton} from "./checkOut-item.styles.js"
import { useContext } from "react"
import { CartContext } from './../../contexts/cart.context';
const CheckOutItem=({cartItem})=>{
 const {name,imageUrl,price,quantity}=cartItem
 const {handleQuantity,removeItem}=useContext(CartContext)
 return(
    <CheckOutItemContainer>
        <ImageContainer>
        <Image src={imageUrl} alt={name}/>
        </ImageContainer>
        <CustomWidth>{name}</CustomWidth>
        <Quantity>
            <Arrow onClick={()=>handleQuantity("minus",cartItem)}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow  onClick={()=>handleQuantity("plus",cartItem)}>&#10095;</Arrow>
        </Quantity>
        <CustomWidth> ${price}</CustomWidth>
        <RemoveButton onClick={()=>removeItem(cartItem)}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
 )

}
export default CheckOutItem