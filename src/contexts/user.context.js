import { createContext, useEffect,useReducer} from "react";
import {
    creatUserDocumentFromAuth,
    onAuthStateChangedListiners,
} from "./../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});
const User_Action_Type = {
    set_current_user:"set_current_user"
}
const UserReducer = (state,action)=>{
    console.log("dispatched",action)
const {type,payload}=action;
switch(type){
    case User_Action_Type.set_current_user:
        return{
            ...state,
            currentUser:payload
        }
    default:
        throw new Error(`unhandled Type ${type} is userReducer`);
}

}
const INITIAL_STATE={
    currentUser:null
}




export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [{currentUser},dispatch]= useReducer(UserReducer,INITIAL_STATE);
    console.log("userReducer",currentUser)
    const setCurrentUser = (user)=>{
        dispatch({type:User_Action_Type.set_current_user,payload:user});
    }
    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        onAuthStateChangedListiners((user) => {
            if(user){
                creatUserDocumentFromAuth(user)
            }
            console.log("user from context", user);
            setCurrentUser(user);
        });
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
