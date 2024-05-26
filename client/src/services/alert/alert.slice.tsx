import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    status: null,
    message: "",
  },
  reducers: {},
  extraReducers: () => {},
});

export default alertSlice.reducer;
