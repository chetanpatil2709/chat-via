import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import userSlice from "./user/user.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});
export type AppDispatch = typeof store.dispatch;

export default store;
