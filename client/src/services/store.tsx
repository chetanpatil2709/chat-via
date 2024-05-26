import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
export type AppDispatch = typeof store.dispatch;

export default store;