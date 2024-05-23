import { Button } from "../../components/shared/Buttons";
import { Input } from "../../components/shared/FormControls";

const LoginForm = () => {
  return (
    <>
      <Input type="text" label="Email" name="email" />
      <Input type="password" label="Password" name="password" />
      <Button title="Login" type="submit" size="full" />
    </>
  );
};

export default LoginForm;
