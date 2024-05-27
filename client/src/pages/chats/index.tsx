import { useDispatch } from "react-redux";
import Heading from "../../components/Heading";
import SearchBar from "../../components/SearchBar";
import { getAll } from "../../services/user/user.action";
import ChatHeads from "./ChatHeads";
import GroupHeads from "./GroupHeads";
import { IAllChats, IUserDetails } from "./interface";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../services/store";
import { Key, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Chat = () => {
  const { type } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const auth = useAuth();
  const [allChats, setAllChats] = useState<IAllChats | undefined>(undefined);
  const loadAllChats = async () => {
    const res = await dispatch(getAll());
    setAllChats(res.payload);
  };
  useEffect(() => {
    loadAllChats();
  }, []);
  const list: IUserDetails[] = [
    {
      name: "Tony Stark",
      image: "/src/assets/tony.jpg",
      lastMsg: "Hiii there",
      lastMsgTime: "02.43 PM",
    },
    {
      name: "Hanis Amir",
      image: "/src/assets/hani-aa.webp",
      lastMsg: "Hello Rock",
      lastMsgTime: "10.02 AM",
    },

    {
      name: "Virat Kohli",
      image: "/src/assets/virat-kohli.png",
      lastMsg: "Hello Rock",
      lastMsgTime: "10.02 AM",
    },
    {
      name: "Tony Stark",
      image: "/src/assets/tony.jpg",
      lastMsg: "Hiii there",
      lastMsgTime: "02.43 PM",
    },
    {
      name: "Hanis Amir",
      image: "/src/assets/hani-aa.webp",
      lastMsg: "Hello Rock",
      lastMsgTime: "10.02 AM",
    },

    {
      name: "Virat Kohli",
      image: "/src/assets/virat-kohli.png",
      lastMsg: "Hello Rock",
      lastMsgTime: "10.02 AM",
    },
    {
      name: "Tony Stark",
      image: "/src/assets/tony.jpg",
      lastMsg: "Hiii there",
      lastMsgTime: "02.43 PM",
    },
    {
      name: "Hanis Amir",
      image: "/src/assets/hani-aa.webp",
      lastMsg: "Hello Rock",
      lastMsgTime: "10.02 AM",
    },

    {
      name: "Virat Kohli",
      image: "/src/assets/virat-kohli.png",
      lastMsg: "Hello Rock",
      lastMsgTime: "10.02 AM",
    },
  ];

  return (
    <>
      <div className="px-4">
        <Heading title={type === "groups" ? "Groups" : "Chats"} />
        <SearchBar />
        <div className="mt-4">
          <h1>Recent</h1>
          <div className="mt-2">
            {type === "groups" ? (
              <>
                {list.map((ele, index) => (
                  <GroupHeads key={index} data={ele} />
                ))}
              </>
            ) : (
              <>
                {allChats &&
                  allChats &&
                  allChats.users
                    ?.filter((ele) => {
                      return ele.username !== auth.state.username;
                    })
                    .map((ele: IUserDetails, index: Key | null | undefined) => (
                      <ChatHeads key={index} data={ele} />
                    ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div className="wrapper w-full h-full overflow-y-auto">
        <div className="sm:mt-5 px-4 space-y-4">
          <Heading title="Chats" />
          <SearchBar />
          <div className="mt-4">
              <h1>Recent</h1>
              <div className="mt-2">
                {list.map((ele, index) => (
                  <ChatHeads key={index} data={ele} />
                ))}
              </div>
            </div>
        </div>
      </div>
      <div className="w-full h-full hidden lg:col-span-2 overflow-y-auto bg-slate-700"></div>
    </div> */}
    </>
  );
};

export default Chat;
