import { User_Action_Type } from "./user.types";
import { User } from "firebase/auth";
import {
  createAction,
  Action,
  ActionWithPayload,
  WithMatcher,
} from "../../utils/reducer/reducer.utils";
import {
  UserData,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";

export type CheckUserSession = Action<User_Action_Type.CHECK_USER_SESSION>;
export type SetCurrentUser = ActionWithPayload<
  User_Action_Type.SET_CURRENT_USER,
  UserData
>;
export type GoogleSignInStart = Action<User_Action_Type.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<
  User_Action_Type.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type SignUpStart = ActionWithPayload<
  User_Action_Type.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignUpSuccess = ActionWithPayload<
  User_Action_Type.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;
export type SignInSuccess = ActionWithPayload<
  User_Action_Type.SIGN_IN_SUCCESS,
  UserData
>;
export type SignInFailed = ActionWithPayload<
  User_Action_Type.SIGN_IN_FAILED,
  Error
>;
export type SignUpFailed = ActionWithPayload<
  User_Action_Type.SIGN_UP_FAILED,
  Error
>;
export type SignOutStart = Action<User_Action_Type.SIGN_OUT_START>;
export type SignOutSuccess = Action<User_Action_Type.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<
  User_Action_Type.SIGN_OUT_FAILED,
  Error
>;

export const setCurrentUser = WithMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(User_Action_Type.SET_CURRENT_USER, user)
);
export const checkUserSession = WithMatcher(
  (): CheckUserSession => createAction(User_Action_Type.CHECK_USER_SESSION)
);
export const googleSignInStart = WithMatcher(
  (): GoogleSignInStart => createAction(User_Action_Type.GOOGLE_SIGN_IN_START)
);
export const emailSignInStart = WithMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(User_Action_Type.EMAIL_SIGN_IN_START, { email, password })
);
export const signInSuccess = WithMatcher(
  (user: UserData & {id:string}): SignInSuccess =>
    createAction(User_Action_Type.SIGN_IN_SUCCESS, user)
);
export const signInFailed = WithMatcher(
  (error: Error): SignInFailed =>
    createAction(User_Action_Type.SIGN_IN_FAILED, error)
);

export const signUpStart = WithMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(User_Action_Type.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = WithMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(User_Action_Type.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = WithMatcher(
  (error: Error): SignUpFailed =>
    createAction(User_Action_Type.SIGN_UP_FAILED, error)
);

export const signOutStart = WithMatcher(
  (): SignOutStart => createAction(User_Action_Type.SIGN_OUT_START)
);

export const signOutSuccess = WithMatcher(
  (): SignOutSuccess => createAction(User_Action_Type.SIGN_OUT_SUCCESS)
);

export const signOutFailed = WithMatcher(
  (error: Error): SignOutFailed =>
    createAction(User_Action_Type.SIGN_OUT_FAILED, error)
);
