import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api";

export const getAll = createAsyncThunk("getAll", async () => {
  try {
    const response = await axiosInstance.get("user", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
});
