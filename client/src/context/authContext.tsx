import React, { createContext, useEffect, useReducer } from "react";

interface IAuthState {
  isAuthenticated: boolean;
  username: string | null;
}
const initialState: IAuthState = {
  isAuthenticated: false,
  username: "",
};
interface IActionPayload {
  token?: string;
  username?: string;
}
interface IAuthAction {
  type?: "LOGIN" | "LOGOUT" | "CHECK";
  payload?: IActionPayload;
}
const authReducer = (state: IAuthState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case "LOGIN": {
      action?.payload?.token &&
        localStorage.setItem("_t", action?.payload?.token || "");
      localStorage.setItem("_u", action?.payload?.username || "");
      const username = localStorage.getItem("_u");
      return {
        ...state,
        isAuthenticated: true,
        username: username,
      };
    }
    case "LOGOUT":
      localStorage.removeItem("_t");
      localStorage.removeItem("_u");
      return {
        ...state,
        isAuthenticated: false,
      };
    case "CHECK": {
      const token = localStorage.getItem("_t");
      const username = localStorage.getItem("_u");
      if (token !== null) {
        return {
          ...state,
          isAuthenticated: true,
          username: username,
        };
      } else {
        return {
          ...state,
          isAuthenticated: false,
          username: "",
        };
      }
    }
    default:
      return state;
  }
};
interface IAuthContext {
  state: IAuthState;
  login?: (user: { token: string; username: string }) => void | undefined;
  logout?: (() => void) | undefined;
}
export const AuthContext = createContext<IAuthContext>({
  state: initialState,
});
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const login = (user: { token: string }) => {
    dispatch({ type: "LOGIN", payload: user });
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    dispatch({ type: "CHECK" });
  }, []);
  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
