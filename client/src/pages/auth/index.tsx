import { LuMessagesSquare } from "react-icons/lu";
import LoginForm from "./LoginForm";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

const Auth = () => {
  const [loginOrRegister, setLoginOrRegister] = useState(true);
  const handelLoginOrRegister = () => setLoginOrRegister(!loginOrRegister);
  return (
    <div className="w-full h-screen grid grid-cols-1 place-items-center bg-slate-100">
      <div className="w-full sm:w-2/3 lg:w-1/3 space-y-4 px-3 sm:px-0">
        <div className="flex justify-center space-x-2 py-2">
          <LuMessagesSquare size={35} className="active" />
          <h1 className="text-3xl font-semibold">Chat Via</h1>
        </div>
        <div className="flex flex-col items-center space-x-2 py-2">
          <h1 className="text-xl font-medium">
            {loginOrRegister ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-sm text-slate-400">
            {loginOrRegister ? "Sign in" : "Sign up"} to continue to Chatvia.
          </p>
        </div>
        <form className="py-8 px-4 space-y-4 shadow-sm bg-white rounded-md">
          {loginOrRegister ? (
            <LoginForm />
          ) : (
            <RegisterForm setLoginOrRegister={setLoginOrRegister} />
          )}
        </form>
        <div className="text-center">
          {loginOrRegister ? (
            <h1>
              Don't have an account ?{" "}
              <span
                className="brand-color cursor-pointer"
                onClick={handelLoginOrRegister}
              >
                Signup now
              </span>
            </h1>
          ) : (
            <h1>
              Already have an account ?{" "}
              <span
                className="brand-color cursor-pointer"
                onClick={handelLoginOrRegister}
              >
                Signin now
              </span>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
