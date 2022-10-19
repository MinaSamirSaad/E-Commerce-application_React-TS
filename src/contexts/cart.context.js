import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    // if Found increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === existingCartItem.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    // return new array with modified cartitems/new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
    // find if cartItems contains productToRemove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );
    // if Found decrement quantity
    if (existingCartItem.quantity === 1)
        return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
    else if (existingCartItem.quantity > 1)
        return cartItems.map((cartItem) =>
            cartItem.id === existingCartItem.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
};

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    totalQuantity: 0,
    totalPrice: 0,
});
const User_Action_Type={
    SET_CART_ITEMS:"SET_CART_ITEMS",
    HANDLE_CART_OPEN:"HANDLE_CART_OPEN"
}
const INITIAL_STATE = {
    cartOpen: false,
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};
const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case User_Action_Type.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            };
        case User_Action_Type.HANDLE_CART_OPEN:
        return {
            ...state,
            ...payload,
        };
        default:
            throw new Error(`erorrrrrr not handle type ${type}`);
    }
};

export const CartProvider = ({ children }) => {
    const [{ totalPrice, totalQuantity, cartItems, cartOpen }, dispatch] =
        useReducer(cartReducer, INITIAL_STATE);
    const updateCartItemsReducer = (newCartItems) => {
        let sumQuantity = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        let sumPrice = newCartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity,
            0
        );
        dispatch({
            type: "SET_CART_ITEMS",
            payload: {
                cartItems: newCartItems,
                totalQuantity: sumQuantity,
                totalPrice: sumPrice,
            },
        });
    };
    const setCartOpen = (cartOpen)=>{
        dispatch({type:"HANDLE_CART_OPEN",payload:{cartOpen:cartOpen}})
    }
    const handleQuantity = (order, product) => {
        const newCartItems =
            order === "minus"
                ? removeCartItem(cartItems, product)
                : addCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    };
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };
    const removeItem = (product) => {
        const newCartItems = cartItems.filter(
            (cartItem) => cartItem.id !== product.id
        );
        updateCartItemsReducer(newCartItems);
    };

    const value = {
        cartOpen,
        setCartOpen,
        cartItems,
        addItemToCart,
        totalQuantity,
        handleQuantity,
        removeItem,
        totalPrice,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
