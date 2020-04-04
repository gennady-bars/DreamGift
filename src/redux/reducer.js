import {
  IS_AUTH,
  GET_LOGIN,
  RECEIVE_FETCH_TOLOGIN,
  RECEIVE_FETCH_TOSIGNUP,
  CHANGE_MODAL,
  ADD_ACCOUNT_HESHTEGS,
  SAVE_PRESENT,
  CHANGE_PRESENT,
  USER_NAME,
  USER_MIDDLE_NAME,
  USER_FAMILY_NAME,
  USER_EMAIL,
  USER_INFO,
  RECEIVE_FETCH_TOCHANGEINFO,
} from './action-types';

const initialUserState = {
  auth: false,
  login: '',
  error: '',
  isModalOpen: false,
  accountHeshtegs: [],
  presents: [],
  userName: '',
  userFamilyName: '',
  userMiddleName: '',
  userEmail: '',
  userInfo: '',
};

export const reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return {
        ...state,
        auth: action.isAuth,
      };
    case GET_LOGIN:
      return {
        ...state,
        login: action.login,
      };
    case RECEIVE_FETCH_TOLOGIN:
      return {
        ...state,
        auth: action.auth,
        error: action.err,
        accountHeshtegs: action.accountHeshtegs,
        presents: action.presents,
        userName: action.user.userName,
        userFamilyName: action.user.userFamilyName,
        userMiddleName: action.user.userMiddleName,
        userEmail: action.user.userEmail,
        userInfo: action.user.userInfo,
      };
    case RECEIVE_FETCH_TOSIGNUP:
      return {
        ...state,
        auth: action.auth,
        error: action.err,
      };
    case CHANGE_MODAL:
      return {
        ...state,
        isModalOpen: action.isOpen,
      };
    case ADD_ACCOUNT_HESHTEGS:
      return {
        ...state,
        accountHeshtegs: action.heshtegs,
      };
    case USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    case USER_MIDDLE_NAME:
      return {
        ...state,
        userMiddleName: action.userMiddleName,
      };
    case USER_FAMILY_NAME:
      return {
        ...state,
        userFamilyName: action.userFamilyName,
      };
    case SAVE_PRESENT:
      return {
        ...state,
        presents: [...state.presents, action.present],
      };
    case CHANGE_PRESENT:
      return {
        ...state,
        presents: action.presents,
      };
    case USER_EMAIL:
      return {
        ...state,
        userEmail: action.userEmail,
      };
    case USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case RECEIVE_FETCH_TOCHANGEINFO:
      return {
        ...state,
      };
    default:
      return state;
  }
};