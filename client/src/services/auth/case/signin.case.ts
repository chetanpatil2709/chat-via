import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { signIn } from "../auth.actions";
import { IAuthState } from "../interface";

const signinCase = (builder: ActionReducerMapBuilder<IAuthState>) => {
  builder
    .addCase(signIn.pending, (state: IAuthState) => {
      state.loading = true;
    })
    .addCase(signIn.fulfilled, (state: IAuthState, action) => {
      state.loading = false;
      state.error = null;
      state.result = action.payload;
      state.isAuthenticated = true;
    })
    .addCase(signIn.rejected, (state: IAuthState, action) => {
      state.loading = false;
      state.error = action || "An error occured";
      state.result = [];
    });
};

export default signinCase;
