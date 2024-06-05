import axios from "axios";
import {
  createOfferRequest,
  createOfferSuccess,
  createOfferFailure,
} from "../Slices/offersSlice";

// Create Offer Action
export const createOffer = () => async (dispatch, getState) => {
  try {
    const offerData = getState();
    console.log(offerData);
    const offer = {
      title: offerData.offer.stepOneData.title,
      description: offerData.offer.stepOneData.description,
      category: offerData.offer.stepOneData.category.value,
      subcategory: offerData.offer.stepOneData.subcategory.value,
      transactionType: offerData.offer.stepOneData.transactionType.value,
      country: offerData.offer.stepOneData.country.value,
      price: offerData.offer.stepOneData.price,
      images: offerData.offer.stepTwoData.images,
      latitude: offerData.offer.stepThreeData.latitude,
      longitude: offerData.offer.stepThreeData.longitude,
    };
    console.log("final step");
    console.log(offer);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": offerData.auth.token,
      },
    };

    dispatch(createOfferRequest());
    const { data } = await axios.post(
      "http://localhost:3700/api/offers",
      offer,
      config
    );

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
