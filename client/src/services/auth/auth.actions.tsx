import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api";
import { ICredentials, IRegisterSchema } from "../../pages/auth/interface";

export const signIn = createAsyncThunk(
  "signin",
  async (credentials: ICredentials) => {
    try {
      const response = await axiosInstance.post("auth/signin", {
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const signUp = createAsyncThunk(
  "registerUser",
  async (data: IRegisterSchema) => {
    try {
      const response = await axiosInstance.post("auth/signup", {
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
