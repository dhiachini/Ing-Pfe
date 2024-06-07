import axios from "axios";

import {
  createOfferRequest,
  createOfferSuccess,
  createOfferFailure,
} from "../Slices/offersSlice";
import { useEffect, useState } from "react";

// Create Offer Action
export const createOffer = () => async (dispatch, getState) => {
  // try {
  const offerData = getState();
  console.log("offerdata is:", offerData);

  const [offersubmit, setOffreSubmit] = useState({});
  // const offer = {
  //   title: offerData.offers.stepOneData.title,
  //   description: offerData.offers.stepOneData.description,
  //   category: offerData.offers.stepOneData.category.value,
  //   subcategory: offerData.offers.stepOneData.subcategory.value,
  //   transactionType: offerData.offers.stepOneData.transactionType.value,
  //   country: offerData.offers.stepOneData.country.value,
  //   price: offerData.offers.stepOneData.price,
  //   images: offerData.offers.stepTwoData.images,
  //   latitude: offerData.offers.stepThreeData.latitude,
  //   longitude: offerData.offers.stepThreeData.longitude,
  // };
 useEffect(()=> {setOffreSubmit(offerData)},[offersubmit]) 
  console.log("final step");
  console.log(offersubmit);

  //   const config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       "x-auth-token": offerData.auth.token,
  //     },
  //   };

  //   dispatch(createOfferRequest());
  //   const { data } = await axios.post(
  //     "http://localhost:3700/api/offers",
  //     offer,
  //     config
  //   );

  //   dispatch(createOfferSuccess(data.offer));
  // } catch (error) {
  //   dispatch(
  //     createOfferFailure(
  //       error.response && error.response.data.message
  //         ? error.response.data.message
  //         : error.message
  //     )
  //   );
  // }
};

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
