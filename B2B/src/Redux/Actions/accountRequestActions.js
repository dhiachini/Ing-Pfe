import { request, errors } from "../Slices/accountrequestSlice";
import axios from "axios";

export const addAccountRequest = (requestData) => (dispatch) => {
  const response = axios
    .post("http://localhost:3700/api/accountrequests", requestData)
    .then((response) => {
      dispatch(
        request(...response.data, (patent = response.data.patentFilePath))
      );
      dispatch(errors({}))
    })

    .catch((error) => dispatch(errors(error.response.data)));
};
