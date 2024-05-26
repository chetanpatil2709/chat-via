import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/shared/Buttons";
import { Input } from "../../components/shared/FormControls";
import { FormEvent, useState } from "react";
import { IAuthResult, ICredentials, RootState } from "./interface";
import { AppDispatch } from "../../services/store";
import { signIn } from "../../services/auth/auth.actions";
import Alert from "../../components/Alert";
import { validateEmail, validatePassword } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const auth = useAuth();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const authResult = useTypedSelector((state) => state.auth) as IAuthResult;
  const credentialSchema: ICredentials = { email: "", password: "" };
  const [alert, setAlert] = useState({ status: 0, message: "" });
  const [credentials, setCredentials] = useState<ICredentials>({
    ...credentialSchema,
  });
  const [credentialsErr, setCredentialsErr] = useState<ICredentials>({
    ...credentialSchema,
  });
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    let isValid = true;
    const tempErr = { ...credentialSchema };
    if (credentials.email === "") {
      tempErr.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(credentials.email)) {
      tempErr.email = "Email is not valid";
      isValid = false;
    } else if (credentials.email !== "" && validateEmail(credentials.email)) {
      tempErr.email = "";
    }
    if (credentials.password === "") {
      tempErr.password = "Password is required";
      isValid = false;
    } else if (!validatePassword(credentials.password)) {
      tempErr.password = "Password is not valid";
      isValid = false;
    } else if (
      credentials.password !== "" &&
      validatePassword(credentials.password)
    ) {
      tempErr.password = "";
    }
    setCredentialsErr({ ...tempErr });
    return isValid;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const res = await dispatch(signIn(credentials));
      if (res.payload) {
        setAlert({
          status: res.payload.status,
          message: res.payload.message,
        });
        setTimeout(() => {
          navigate("/chat");
          setAlert({
            status: 0,
            message: "",
          });
        }, 2000);
      }
      if (res.payload.status === 200) {
        setTimeout(
          () =>
            auth.login({
              token: res?.payload?.token,
              username: res?.payload.username,
            }),
          2000
        );
      }
      console.log("res  ", res);
      console.log("auth  ", auth);
    }
  };
  return (
    <>
      <Input
        type="text"
        label="Email"
        name="email"
        error={credentialsErr.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        error={credentialsErr.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
      />
      {alert.message && <Alert status={alert.status} text={alert.message} />}
      {authResult.loading ? (
        <Button title="Loading..." type="button" color="loading" size="full" />
      ) : (
        <Button
          title="Login"
          type="submit"
          color="primary"
          size="full"
          onClick={(e: FormEvent<Element>) => handleSubmit(e)}
        />
      )}
    </>
  );
};

export default LoginForm;
