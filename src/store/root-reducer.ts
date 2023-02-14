import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer";
import { CategoriesReducer } from "./categories/category.reducer";
import { cartReducer } from './cart/cart.reducer';
export const rootReducer = combineReducers({
    user: UserReducer,
    categories : CategoriesReducer,
    cart :cartReducer
})