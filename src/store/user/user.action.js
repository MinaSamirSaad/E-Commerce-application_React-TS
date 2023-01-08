import { User_Action_Type } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";
export const setCurrentUser = (user)=> createAction(User_Action_Type.set_current_user,user);
