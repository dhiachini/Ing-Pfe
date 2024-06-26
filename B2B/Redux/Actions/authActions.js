import axios from "axios";
import { loginSuccess, loginFailure, logout } from "../Slices/authSlice";

export const loginAction = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3700/api/auth/login",
      credentials
    );
    const { token } = response.data;
    localStorage.setItem("token", token); // Save token to local storage
    dispatch(loginSuccess({ token }));
    window.location.reload();
  } catch (error) {
    dispatch(
      loginFailure(error.response?.data?.msg || "Authentication failed")
    );
  }
};

export const logoutAction = () => async(dispatch) => {
  localStorage.removeItem("token"); // Remove the token from localStorage
  dispatch(logout());
};
