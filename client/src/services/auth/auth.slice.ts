import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "./interface";
import signinCase from "./case/signin.case";
import signupCase from "./case/signup.case";

const initialState: IAuthState = {
  loading: false,
  error: null,
  result: {},
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    signinCase(builder);
    signupCase(builder);
  },
});

export default authSlice.reducer;
