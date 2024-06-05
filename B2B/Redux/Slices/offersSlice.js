// offersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stepOneData: {},
    stepTwoData: {},
    stepThreeData: {},
    loading: false,
    error: null,
};

const offersSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        updateStepOneData(state, action) {
            state.stepOneData = action.payload;
            console.log(state.stepOneData)
        },
        updateStepTwoData(state, action) {
            state.stepTwoData = action.payload;
        },
        updateStepThreeData(state, action) {
            state.stepThreeData = action.payload;
        },
        createOfferRequest(state) {
            state.loading = true;
            state.error = null;
        },
        createOfferSuccess(state, action) {
            state.loading = false;
            state.stepOneData = {};
            state.stepTwoData = {};
            state.stepThreeData = {};
        },
        createOfferFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    updateStepOneData,
    updateStepTwoData,
    updateStepThreeData,
    createOfferRequest,
    createOfferSuccess,
    createOfferFailure,
} = offersSlice.actions;

export default offersSlice.reducer;
