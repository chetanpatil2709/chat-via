import { Outlet, useSearchParams } from "react-router-dom";
import Menu from "./Menu";
import { useEffect, useRef, useState } from "react";
import ChatRoom from "./chat-room/ChatRoom";
import EmptyChatRoom from "./chat-room/EmptyChatRoom";
import { motion } from "framer-motion";
const AppLayout = () => {
  const asideRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  const [chat, setChat] = useState(false);
  const [searchParams] = useSearchParams();
  useEffect(() => setChat(searchParams.has("with")), [searchParams]);
  const [chatroomContainerStyles, setChatroomContainerStyles] = useState({});
  const [sidebarStyles, setSidebarStyles] = useState({});
  useEffect(() => {
    const handleResize = () => {
      setHeight(asideRef.current?.clientHeight);
      setChatroomContainerStyles({
        width: "100%",
        display: window.innerWidth < 1024 && !chat ? "none" : "unset",
      });
      setSidebarStyles({
        minWidth: window.innerWidth < 1024 ? "100%" : "30%",
        display: window.innerWidth < 1024 && chat ? "none" : "unset",
      });
    };
    setTimeout(() => handleResize(), 100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [chat]);
  const variants = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  };
  return (
    <>
      <section className="w-full h-screen flex flex-col-reverse items-start overflow-hidden bg-white sm:flex-row">
        <aside
          ref={asideRef}
          className="aside w-full sm:w-fit h-fit sm:h-screen border-t sm:border-t-0 bg-white"
        >
          <Menu />
        </aside>
        <div
          className="sidebar h-full overflow-y-auto overflow-x-hidden bg-slate-100 "
          style={sidebarStyles}
        >
          <Outlet />
        </div>

        {chat ? (
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1, direction: "right" }}
            className="chat-room lg:w-2/3 h-full"
            style={chatroomContainerStyles}
          >
            <ChatRoom height={height || 0} />
          </motion.div>
        ) : (
          <>
            <div
              className="chat-room lg:w-2/3 h-full"
              style={chatroomContainerStyles}
            >
              <EmptyChatRoom />
            </div>
          </>
        )}
      </section>
      {/* <section className="w-full h-screen flex flex-col-reverse items-start justify-end sm:flex-row">
        <aside
          ref={asideRef}
          className="w-full sm:w-fit h-fit sm:h-screen border-t sm:border-t-0 bg-white"
        >
          <Menu />
        </aside>
        {height ? (
          <div
            className={`w-full overflow-y-auto sm:overflow-hidden`}
            style={
              window.innerWidth > 640
                ? { height: "100%" }
                : { height: `calc(100% - ${height && height.toString()}px)` }
            }
          >
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              {chat && window.innerWidth < 640 ? (
                <>
                  <ChatRoom height={height} />
                </>
              ) : (
                <>
                  <div className="wrapper w-full h-full overflow-x-hidden">
                    <Outlet />
                  </div>
                  <ChatRoom height={height} />
                </>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="grid h-full w-full place-content-center">
              <h1 className="text-2xl opacity-70">loading....</h1>
            </div>
          </>
        )}
      </section> */}
    </>
  );
};

export default AppLayout;
