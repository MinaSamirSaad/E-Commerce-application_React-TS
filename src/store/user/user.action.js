import { User_Action_Type } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";
export const setCurrentUser = (user) =>
  createAction(User_Action_Type.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(User_Action_Type.CHECK_USER_SESSION);
export const googleSignInStart = () =>
  createAction(User_Action_Type.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (email, password) =>
  createAction(User_Action_Type.EMAIL_SIGN_IN_START, { email, password });
export const signInSuccess = (user) =>
  createAction(User_Action_Type.SIGN_IN_SUCCESS, user);
export const signInFailed = (error) =>
  createAction(User_Action_Type.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  createAction(User_Action_Type.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(User_Action_Type.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  createAction(User_Action_Type.SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(User_Action_Type.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(User_Action_Type.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(User_Action_Type.SIGN_OUT_FAILED, error);
