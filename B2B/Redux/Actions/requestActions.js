import axios from "axios";
import { errors, request } from "../Slices/requestSlice";
export const requestAction = (requestData) => async (dispatch) => {
  await axios
    .post("http://localhost:3700/api/accountrequests", requestData)
    .then((response) => {
      dispatch(request(response.data));
      //navigate("/home-v9");
    })
    .catch((error) => {
      dispatch(errors(error.response.data));
    });
};