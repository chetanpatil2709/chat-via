import { useEffect, useState } from "react";
import { FaRegUser, FaRegUserCircle, FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { MdChatBubbleOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const [path, setPath] = useState<string | undefined>();
  const p = useLocation();
  useEffect(() => setPath(p.pathname), [p]);
  return (
    <div className="w-full px-5 py-3 sm:mt-2">
      <div className="w-full">
        <Link to="/">
          <LuMessagesSquare
            size={35}
            className="cursor-pointer hidden sm:block active"
          />
        </Link>
        <div className="w-full flex justify-between items-center cursor-pointer sm:flex-col sm:mt-16 sm:space-y-10">
          <Link to="/profile">
            <FaRegUser
              size={25}
              className={`menu-icon ${path === "/profile" && " active"}`}
            />
          </Link>
          <Link to="/">
            <MdChatBubbleOutline
              size={25}
              className={`menu-icon ${path === "/" && " active"}`}
            />
          </Link>
          <Link to="/groups">
            <FaUsers
              size={25}
              className={`menu-icon ${path === "/groups" && " active"}`}
            />
          </Link>
          <Link to="/setting">
            <IoSettingsOutline
              size={25}
              className={`menu-icon ${path === "/setting" && " active"}`}
            />
          </Link>
          <FaRegUserCircle
            size={29}
            className="block sm:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;