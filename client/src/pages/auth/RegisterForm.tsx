import { Button } from "../../components/shared/Buttons";
import { Input } from "../../components/shared/FormControls";

const RegisterForm = () => {
  return (
    <>
      <Input type="text" label="Email" name="email" />
      <Input type="password" label="Password" name="password" />
      <Input type="password" label="Confirm Password" name="confirmPassword" />
      <Button title="Register" type="submit" size="full" />
    </>
  );
};

export default RegisterForm;
