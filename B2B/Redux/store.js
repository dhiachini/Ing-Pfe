import { configureStore } from "@reduxjs/toolkit";
import requestSlice from "./Slices/requestSlice";
import authSlice from "./Slices/authSlice";
import offersSlice from './Slices/offersSlice';


export const store = configureStore({
  reducer: {
    account: requestSlice,
    auth: authSlice,
    offers: offersSlice,
  },
});