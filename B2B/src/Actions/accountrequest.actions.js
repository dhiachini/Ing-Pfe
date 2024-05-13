// actions.js
import * as actionTypes from "./Constants";
import axios from "axios";

export const addAccountRequest = (requestData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3700/api/accountrequests",
        requestData
      );
      dispatch({
        type: actionTypes.ADD_ACCOUNT_REQUEST_SUCCESS,
        payload: {
          ...response.data,
          patent: response.data.patentFilePath, // Access the file path from the response
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_ACCOUNT_REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const updateAccountRequest = (id, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3700/api/accountrequests/${id}`,
        updatedData
      );
      dispatch({
        type: actionTypes.UPDATE_ACCOUNT_REQUEST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_ACCOUNT_REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const fetchAllAccountRequests = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3700/api/accountrequests"
      );
      dispatch({
        type: actionTypes.FETCH_ALL_ACCOUNT_REQUESTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ALL_ACCOUNT_REQUESTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const fetchSingleAccountRequest = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3700/api/accountrequests${id}`
      );
      dispatch({
        type: actionTypes.FETCH_SINGLE_ACCOUNT_REQUEST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_SINGLE_ACCOUNT_REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const deleteAccountRequest = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3700/api/accountrequests${id}`
      );
      dispatch({
        type: actionTypes.DELETE_ACCOUNT_REQUEST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_ACCOUNT_REQUEST_FAILURE,
        payload: error.message,
      });
    }
  };
};
