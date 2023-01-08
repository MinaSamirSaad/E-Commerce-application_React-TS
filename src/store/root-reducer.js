import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer";
import { CategoriesReducer } from "./categories/category.reducer";
export const rootReducer = combineReducers({
    user: UserReducer,
    categories : CategoriesReducer
})