import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/shared/Buttons";
import { Input } from "../../components/shared/FormControls";
import { AppDispatch } from "../../services/store";
import { IAuthResult, IRegisterSchema, RootState } from "./interface";
import { FormEvent, useEffect, useState } from "react";
import Alert from "../../components/Alert";
import { signUp } from "../../services/auth/auth.actions";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../utils/validate";

const RegisterForm = ({
  setLoginOrRegister,
}: {
  setLoginOrRegister: (value: boolean) => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const result = useTypedSelector((state) => state.auth) as IAuthResult;
  const registerSchema: IRegisterSchema = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [alert, setAlert] = useState({ status: 0, message: "" });
  const [registerInput, setRegisterInput] = useState<IRegisterSchema>({
    ...registerSchema,
  });
  const [registerErr, setRegisterErr] = useState<IRegisterSchema>({
    ...registerSchema,
  });
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    let isValid = true;
    const tempErr = { ...registerSchema };
    if (registerInput.username === "") {
      tempErr.username = "Username is required";
      isValid = false;
    } else if (!validateUsername(registerInput.username)) {
      tempErr.username = "Only char and underscore(_) allowed";
      isValid = false;
    } else if (
      registerInput.username !== "" &&
      validateUsername(registerInput.username)
    ) {
      tempErr.username = "";
    }
    if (registerInput.email === "") {
      tempErr.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(registerInput.email)) {
      tempErr.email = "Email is not valid";
      isValid = false;
    } else if (
      registerInput.email !== "" &&
      validateEmail(registerInput.email)
    ) {
      tempErr.email = "";
    }
    if (registerInput.password === "") {
      tempErr.password = "Password is required";
      isValid = false;
    } else if (!validatePassword(registerInput.password)) {
      tempErr.password = "Password is not valid";
      isValid = false;
    } else if (
      registerInput.password !== "" &&
      validatePassword(registerInput.password)
    ) {
      tempErr.password = "";
    }
    if (registerInput.confirmPassword === "") {
      tempErr.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (!validatePassword(registerInput.confirmPassword)) {
      tempErr.confirmPassword = "Confirm Password is not valid";
      isValid = false;
    } else if (
      registerInput.confirmPassword !== "" &&
      validatePassword(registerInput.confirmPassword)
    ) {
      tempErr.confirmPassword = "";
    }
    setRegisterErr({ ...tempErr });
    return isValid;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await dispatch(signUp(registerInput));
      console.log("alert", alert);
    }
  };
  useEffect(() => {
    if (result) {
      if (result?.result) {
        console.log("result ", result);
        setAlert({
          status: result.result.status,
          message: result.result.message,
        });
        setTimeout(() => {
          setAlert({
            status: 0,
            message: "",
          });
          result?.result?.status === 200 && setLoginOrRegister(true);
        }, 2000);
      }
    }
  }, [result]);
  return (
    <>
      <Input
        type="text"
        label="Username"
        name="username"
        error={registerErr.username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
      />
      <Input
        type="text"
        label="Email"
        name="email"
        error={registerErr.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        error={registerErr.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
      />
      <Input
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        error={registerErr.confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
      />
      {alert.message && <Alert status={alert.status} text={alert.message} />}
      {result.loading ? (
        <Button title="Loading..." type="button" color="loading" size="full" />
      ) : (
        <Button
          title="Register"
          type="submit"
          color="primary"
          size="full"
          onClick={(e: FormEvent<Element>) => handleSubmit(e)}
        />
      )}
    </>
  );
};

export default RegisterForm;
