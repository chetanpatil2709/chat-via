import Heading from "../../components/Heading";
import SearchBar from "../../components/SearchBar";
import ChatHeads from "./ChatHeads";
import { IList } from "./interface";

const Chat = () => {
  const list: IList[] = [
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
      <div className="px-4 space-y-4">
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
