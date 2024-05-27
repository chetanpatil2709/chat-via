import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./interface";
import getAllCase from "./case/getAll.case";

const initialState: IUserState = {
  loading: false,
  error: null,
  result: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    getAllCase(builder);
  },
});

export default userSlice.reducer;
