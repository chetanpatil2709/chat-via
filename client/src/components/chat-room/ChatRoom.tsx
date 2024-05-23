/* eslint-disable no-debugger */
import { useEffect, useRef, useState } from "react";
import { CiImageOn, CiMenuKebab, CiSearch, CiUser } from "react-icons/ci";
import { IoIosAttach, IoMdArrowBack, IoMdSend } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProfileLayout from "./ProfileLayout";
import Message from "./Message";

const msgList = [
  { msg: "Hii", sender: true, time: "02.55 AM" },
  { msg: "hi", sender: false, time: "02.55 AM" },
  { msg: "how are you", sender: true, time: "02.55 AM" },
  { msg: "fine", sender: false, time: "02.55 AM" },
  {
    msg: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients",
    sender: false,
    time: "02.55 AM",
  },
  { msg: "ok", sender: true, time: "02.55 AM" },
  {
    msg: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients",
    sender: true,
    time: "02.55 AM",
  },
  {
    msg: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients",
    sender: false,
    time: "02.50 AM",
  },
  { msg: "Hii", sender: false, time: "02.55 AM" },
  { msg: "hi", sender: true, time: "02.55 AM" },
  { msg: "how are you", sender: true, time: "02.55 AM" },
  { msg: "fine", sender: false, time: "02.55 AM" },
  {
    msg: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients",
    sender: true,
    time: "02.55 AM",
  },
  { msg: "ok", sender: true, time: "02.55 AM" },
  {
    msg: "A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients",
    sender: true,
    time: "02.55 AM",
  },
];

const ChatRoom = ({ height = 0 }: { height?: number }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chat, setChat] = useState(false);
  const [searchParams] = useSearchParams();
  const [drawer, setDrawer] = useState<boolean>();
  useEffect(() => setChat(searchParams.has("with")), [searchParams]);
  const handleDrawer: () => void = () => setDrawer(!drawer);
  const [contentHeight, setContentHeight] = useState<number>();
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    scrollToBottom();
  }, [contentHeight, contentRef]);

  useEffect(() => {
    console.log("useeffect");
    const headerHeight: number | undefined = headerRef.current?.clientHeight;
    const footerHeight: number | undefined = footerRef.current?.clientHeight;
    const handleResize = () => {
      setContentHeight(
        headerHeight &&
          footerHeight &&
          window.innerHeight -
            headerHeight -
            footerHeight -
            (window.innerWidth < 1024 ? height : 0)
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  // useEffect(() => handleResize());
  console.log("height ", height);
  // const variants = {
  //   initial: { x: "100%" },
  //   animate: { x: 0 },
  //   exit: { x: "100%" },
  // };
  return (
    <>
      {chat ? (
        <div
          // variants={variants}
          // initial="initial"
          // animate="animate"
          // exit="exit"
          // transition={{ duration: 1, direction: "left" }}
          className="w-full md:col-span-2 bg-white"
        >
          <div
            className="relative bg-white"
            style={{ height: window.innerHeight - height || 0 + "px" }}
          >
            <div
              ref={headerRef}
              className="w-full flex justify-between p-5 bg-white z-50 sticky top-0 border-b"
            >
              <div className="flex items-center space-x-4">
                <IoMdArrowBack
                  size={22}
                  className="cursor-pointer lg:hidden"
                  onClick={handleBack}
                />
                <img
                  src="/src/assets/tony.jpg"
                  className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full"
                  alt="image"
                />
                <h1 className="font-semibold">Tony Stark</h1>
              </div>
              <ul className="flex items-center space-x-6">
                <li>
                  <CiSearch size={20} className="cursor-pointer" />
                </li>
                <li onClick={handleDrawer}>
                  <CiUser size={20} className="cursor-pointer" />
                </li>
                <li>
                  <CiMenuKebab size={20} className="cursor-pointer" />
                </li>
              </ul>
            </div>
            {contentHeight ? (
              <>
                {drawer && (
                  <ProfileLayout
                    height={contentHeight}
                    handleDrawer={handleDrawer}
                  />
                )}
                <div
                  ref={contentRef}
                  className="overflow-x-hidden px-2 sm:px-3 md:px-4"
                  data-height={contentHeight}
                  style={{
                    height: `${contentHeight}px`,
                    // overflowY: drawer ? "hidden" : "auto",
                  }}
                >
                  {msgList.map((ele, index) => (
                    <Message data={ele} key={index} />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </>
            ) : (
              <>
                <div
                  className="grid w-full place-content-center"
                  style={{ height: contentHeight }}
                >
                  <h1 className="text-2xl opacity-70">loading....</h1>
                </div>
              </>
            )}
            <div
              ref={footerRef}
              className="p-5 flex space-x-6 items-center bg-white z-50 border-t"
            >
              <input
                type="text"
                className="w-full secondary-bg p-3 outline-none rounded-sm"
                placeholder="Enter message..."
              />
              <IoIosAttach
                size={30}
                className="cursor-pointer text-violet-600"
              />
              <CiImageOn size={30} className="cursor-pointer text-violet-600" />
              <button className="bg-violet-600 p-3 rounded-sm">
                <IoMdSend color="white" size={24} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full md:col-span-2 hidden h-full sm:grid place-content-center">
          <div className="flex flex-col items-center bg-gray-100 rounded-md p-6">
            <LuMessagesSquare size={50} className="text-violet-600" />
            <p>Select user and start messiging...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatRoom;
