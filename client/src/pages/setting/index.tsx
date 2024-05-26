import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { Button } from "../../components/shared/Buttons";
import { useAuth } from "../../hooks/useAuth";

const Setting = () => {
  const navigate = useNavigate();
  const user = useAuth();
  const handleLogOut = () => {
    user.logout();
    navigate("/");
  };
  return (
    <div className="h-full px-2 space-y-4 overflow-y-auto overflow-x-hidden">
      <Heading title="Setting" />
      <div className="px-2">
        <Button title="Log out" size="full" onClick={handleLogOut} />
      </div>
    </div>
  );
};

export default Setting;
