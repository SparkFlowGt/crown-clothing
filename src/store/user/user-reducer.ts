import {AnyAction} from 'redux'

import { USER_ACTION_TYPES } from "./user-types";

import { signInFailed,signUpFailed,signOutFailed,signInSuccess,signOutSuccess } from "./user-action";
import { UserData } from '../../utils/firebase/firebase.utils';

const INITIAL_STATE:UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export type UserState = {
  readonly currentUser:UserData|null;
  readonly isLoading: boolean;
  readonly error:Error|null
}

export const userReducer = (state = INITIAL_STATE, action:AnyAction) => {
 
 if(signInSuccess.match(action)){
  return{...state,currentUser:action.payload}
 };
 if (signOutSuccess.match(action)){
  return { ...state, currentUser: null };
 };
 if (signInFailed.match(action) ||signUpFailed.match(action) ||signOutFailed.match(action)){
  return { ...state, error: action.payload };
 };
 return state;

};