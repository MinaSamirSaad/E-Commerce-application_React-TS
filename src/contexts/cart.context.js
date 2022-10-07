import { createContext ,useState,useEffect} from "react";

const addCartItem = (cartItems,productToAdd)=>{
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id===productToAdd.id)
    // if Found increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem)=>(cartItem.id===existingCartItem.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem))
    }
    // return new array with modified cartitems/new cart item
    return [...cartItems,{...productToAdd,quantity:1}];
}
const removeCartItem = (cartItems,productToRemove)=>{
    // find if cartItems contains productToRemove
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id===productToRemove.id)
    // if Found decrement quantity
    if(existingCartItem.quantity===1)return cartItems.filter((cartItem)=>cartItem.id!==existingCartItem.id);
    else if(existingCartItem.quantity>1)return cartItems.map((cartItem)=>(cartItem.id===existingCartItem.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem))
}


export const CartContext = createContext({
    cartOpen:false,
    setCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    totalQuantity:0,
    totalPrice:0
})

export const CartProvider =({children})=>{
    const [cartOpen,setCartOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const[totalQuantity,setTotalQuantity]=useState(0);
    const[totalPrice,setTotalPrice]=useState(0);


    useEffect(()=>{
        let sumQuantity=cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0);
         setTotalQuantity(sumQuantity)         
    },[cartItems])
    useEffect(()=>{
        let sumPrice=cartItems.reduce((total,cartItem)=>total+(cartItem.price*cartItem.quantity),0); 
         setTotalPrice(sumPrice)
        
    },[cartItems])
    const handleQuantity =(order,product)=>{
        if(order==="minus"){setCartItems(removeCartItem(cartItems,product))}
        else if(order==="plus"){ setCartItems(addCartItem(cartItems,product))}
       
    }
    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const removeItem=(product)=>{
        setCartItems(cartItems.filter((cartItem)=>cartItem.id!==product.id))
    }

    const value = {cartOpen,setCartOpen,cartItems,addItemToCart,totalQuantity,handleQuantity,removeItem,totalPrice};

    return<CartContext.Provider value={value}>{children}</CartContext.Provider>
}
