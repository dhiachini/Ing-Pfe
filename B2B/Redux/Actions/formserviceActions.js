import axios from "axios";
import { errors, formserviceDate, deleteFormserviceSuccess } from "../Slices/formserviceSlice";

export const formserviceAction = (formserviceData) => async (dispatch) => {
  const config = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  await axios
    .post("http://localhost:3700/api/formservices", formserviceData, config)
    .then((response) => {
      dispatch(formserviceDate(response.data));
      //navigate("/home-v9");
    })
    .catch((error) => {
      dispatch(errors(error.response.data));
      // window.location.reload();
    });
};

export const fetchAllFormservices = () => async (dispatch) => {
  const config = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  try {
    const response = await axios.get("http://localhost:3700/api/formservices", config);
    dispatch(formserviceDate(response.data));
  } catch (error) {
    dispatch(errors(error.response.data));
  }
};

export const deleteFormservice = (id) => async (dispatch) => {
  const config = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(`http://localhost:3700/api/formservices/${id}`, config);
    dispatch(deleteFormserviceSuccess(id));
  } catch (error) {
    dispatch(errors(error.response.data));
  }
};
