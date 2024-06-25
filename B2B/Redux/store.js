import { configureStore } from "@reduxjs/toolkit";
import requestSlice from "./Slices/requestSlice";
import authSlice from "./Slices/authSlice";
import offersSlice from './Slices/offersSlice';
import formserviceSlice from "./Slices/formserviceSlice";
import userDetailsSlice from "./Slices/userDetailsSlice";

export const store = configureStore({
  reducer: {
    account: requestSlice,
    auth: authSlice,
    offers: offersSlice,
    formservice: formserviceSlice,
    userDetails: userDetailsSlice,
    
  },
});