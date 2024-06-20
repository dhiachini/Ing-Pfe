import axios from "axios";
import { errors, formserviceDate } from "../Slices/formserviceSlice";
export const formserviceAction = (formserviceData) => async (dispatch) => {
  const config = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  await axios
    .post("http://localhost:3700/api/formservices", formserviceData,config)
    .then((response) => {
      dispatch(formserviceDate(response.data));
      //navigate("/home-v9");
    })
    .catch((error) => {
      dispatch(errors(error.response.data));
      // window.location.reload();
    });
};
