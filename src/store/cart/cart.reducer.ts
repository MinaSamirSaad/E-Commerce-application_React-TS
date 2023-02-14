import { setIsCartOpen,setCartItems } from './cart.action';
import { CartItem } from './cart.types';
import { AnyAction } from 'redux';

export type CartInitialState={
  readonly isCartOpen :boolean,
  readonly cartItems: CartItem[],
}

const CART_INITIAL_STATE :CartInitialState= {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action :AnyAction):CartInitialState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};