// reducers.js
import * as actionTypes from "../Actions/Constants";

const initialState = {
  accountRequests: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ACCOUNT_REQUEST_SUCCESS:
      return {
        ...state,
        accountRequests: [...state.accountRequests, action.payload],
        error: null,
      };
    case actionTypes.ADD_ACCOUNT_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.UPDATE_ACCOUNT_REQUEST_SUCCESS:
      return {
        ...state,
        accountRequests: state.accountRequests.map((request) =>
          request._id === action.payload._id ? action.payload : request
        ),
        error: null,
      };
    case actionTypes.UPDATE_ACCOUNT_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.FETCH_ALL_ACCOUNT_REQUESTS_SUCCESS:
      return {
        ...state,
        accountRequests: action.payload,
        error: null,
      };
    case actionTypes.FETCH_ALL_ACCOUNT_REQUESTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.FETCH_SINGLE_ACCOUNT_REQUEST_SUCCESS:
      return {
        ...state,
        accountRequests: [action.payload],
        error: null,
      };
    case actionTypes.FETCH_SINGLE_ACCOUNT_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actionTypes.DELETE_ACCOUNT_REQUEST_SUCCESS:
      return {
        ...state,
        accountRequests: state.accountRequests.filter(
          (request) => request._id !== action.payload._id
        ),
        error: null,
      };
    case actionTypes.DELETE_ACCOUNT_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
