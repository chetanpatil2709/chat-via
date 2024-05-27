import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IUserState } from "../interface";
import { getAll } from "../user.action";

const getAllCase = (builder: ActionReducerMapBuilder<IUserState>) => {
  builder
    .addCase(getAll.pending, (state: IUserState) => {
      state.loading = true;
    })
    .addCase(getAll.fulfilled, (state: IUserState, action) => {
      state.loading = false;
      state.error = null;
      state.result = action.payload;
    })
    .addCase(getAll.rejected, (state: IUserState, action) => {
      state.loading = false;
      state.error = action || "An error occured";
      state.result = [];
    });
};

export default getAllCase;
