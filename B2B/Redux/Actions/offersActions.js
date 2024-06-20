import axios from "axios";
import {
  createOfferRequest,
  createOfferSuccess,
  createOfferFailure,
} from "../Slices/offersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const DELETE_OFFER_REQUEST = "DELETE_OFFER_REQUEST";
export const DELETE_OFFER_SUCCESS = "DELETE_OFFER_SUCCESS";
export const DELETE_OFFER_FAILURE = "DELETE_OFFER_FAILURE";


// Create Offer Action
export const createOffer = () => async (dispatch, getState) => {
  try {
    const offerData = getState();
    console.log("offerdata is:", offerData);

    // Create FormData object
    const formData = new FormData();

    // Append offer data fields
    formData.append("title", offerData.offers.stepOneData.title);
    formData.append("description", offerData.offers.stepOneData.description);
    formData.append("category", offerData.offers.stepOneData.category);
    formData.append("subcategory", offerData.offers.stepOneData.subcategory);
    formData.append("transactionType", offerData.offers.stepOneData.transactionType);
    formData.append("country", offerData.offers.stepOneData.country);
    formData.append("price", offerData.offers.stepOneData.price);
    formData.append("latitude", offerData.offers.stepThreeData.latitude);
    formData.append("longitude", offerData.offers.stepThreeData.longitude);

    // Convert base64 strings to File objects and append to FormData
    offerData.offers.stepTwoData.forEach((base64String, index) => {
      const blob = dataURItoBlob(base64String);
      const file = new File([blob], `image_${index}.jpg`, {
        type: "image/jpeg",
      });
      formData.append(`images`, file);
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": offerData.auth.token,
      },
    };

    dispatch(createOfferRequest());
    let typePost = localStorage.getItem("typePost");
    let url = "";
    if (typePost == "0") {
      url = "http://localhost:3700/api/demandes"; // 0 : demande
    } else {
      url = "http://localhost:3700/api/offers"; // 1 : Offre
    }
    // Send the FormData with axios post
    const { data } = await axios.post(url, formData, config);

    dispatch(createOfferSuccess(data.offer));
  } catch (error) {
    dispatch(
      createOfferFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// Function to convert base64 string to Blob
function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}

// Delete Offer Action
export const deleteOffer = (offerId) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_OFFER_REQUEST });
    const {
      auth: { token },
    } = getState();
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };

    await axios.delete(`http://localhost:3700/api/offers/${offerId}`, config);

    dispatch({ type: DELETE_OFFER_SUCCESS, payload: offerId });
  } catch (error) {
    dispatch({
      type: DELETE_OFFER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Async action to fetch offers
export const fetchOffers = createAsyncThunk(
  "offers/fetchOffers",
  async (_, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      const response = await axios.get(
        "http://localhost:3700/api/offers",
        config
      ); // Adjust the URL as needed
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const fetchAllUsersOffers = createAsyncThunk(
  'offers/fetchOffers',
  async (_, thunkAPI) => {
    try {
      let typePost = localStorage.getItem('typeGet');
      let url = "";
      if (typePost === "0") {
        url = "http://localhost:3700/api/demandes/all"; // 0 : For demandes
      } else {
        url = "http://localhost:3700/api/offers/all"; // 1 : For offers
      }

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
