import { IAuthState } from "../../services/auth/interface";

export interface ICredentials {
  email: string;
  password: string;
}
export interface RootState {
  auth: IAuthState;
}
export interface IAuthResult {
  isAuthenticated?: boolean;
  loading?: boolean;
  error?: unknown | null;
  result?: { status: number; message: string; token: string } | null;
}

export interface IRegisterSchema {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
