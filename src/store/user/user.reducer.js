import { User_Action_Type } from "./user.types";
const INITIAL_STATE = {
    currentUser: null,
    isLoading:false,
    error:null
};
export const UserReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case User_Action_Type.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: payload,
            };
            case User_Action_Type.SIGN_OUT_SUCCESS:
                return { ...state, currentUser: null };
            case User_Action_Type.SIGN_IN_FAILED:
            case User_Action_Type.SIGN_OUT_FAILED:
            case User_Action_Type.SIGN_UP_FAILED:
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
