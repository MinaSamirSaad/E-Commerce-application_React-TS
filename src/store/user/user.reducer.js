import { User_Action_Type } from "./user.types";
const INITIAL_STATE = {
    currentUser: null,
};
export const UserReducer = (state = INITIAL_STATE, action) => {
    console.log("dispatched", action);
    const { type, payload } = action;
    switch (type) {
        case User_Action_Type.set_current_user:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            return state;
    }
};
