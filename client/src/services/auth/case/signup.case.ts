import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { signUp } from "../auth.actions";
import { IAuthState } from "../interface";

const signupCase = (builder: ActionReducerMapBuilder<IAuthState>) => {
  builder
    .addCase(signUp.pending, (state: IAuthState) => {
      state.loading = true;
    })
    .addCase(signUp.fulfilled, (state: IAuthState, action) => {
      state.loading = false;
      state.error = null;
      state.result = action.payload;
      state.isAuthenticated = true;
    })
    .addCase(signUp.rejected, (state: IAuthState, action) => {
      state.loading = false;
      state.error = action || "An error occured";
      state.result = [];
    });
};

export default signupCase;
