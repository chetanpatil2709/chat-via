import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api";
import { ICredentials, IRegisterSchema } from "../../pages/auth/interface";

export const signIn = createAsyncThunk(
  "signin",
  async (credentials: ICredentials) => {
    try {
      const response = await axiosInstance.post("auth/signin", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
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
      const response = await axiosInstance.post("auth/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
