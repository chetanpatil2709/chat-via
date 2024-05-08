import { Outlet, useSearchParams } from "react-router-dom";
import Menu from "./Menu";
import { useEffect, useRef, useState } from "react";
import ChatRoom from "./chat-room/ChatRoom";

const AppLayout = () => {
  const asideRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  const [chat, setChat] = useState(false);
  const [searchParams] = useSearchParams();
  useEffect(() => setChat(searchParams.has("with")), [searchParams]);
  const handleResize = () => setHeight(asideRef.current?.clientHeight);
  useEffect(() => {
    setTimeout(() => handleResize(), 100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="w-full h-screen flex flex-col-reverse items-start justify-end sm:flex-row">
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
                <div className="wrapper w-full h-full overflow-y-auto overflow-x-hidden">
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
    </section>
  );
};

export default AppLayout;
