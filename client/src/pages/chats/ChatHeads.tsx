import { useSearchParams } from "react-router-dom";
import { IUserDetails } from "./interface";
import dummyImage from "../../assets/dummy-profile.png";
import { useRef } from "react";
const ChatHeads = ({ data }: { data: IUserDetails }) => {
  //   const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSet(data: IUserDetails) {
    setSearchParams(`with=${data?.username}`);
  }
  const handleImageError = () => {
    if (imageRef.current) {
      (imageRef.current as HTMLImageElement).src = dummyImage;
    }
  };
  return (
    <>
      <div
        className="flex cursor-pointer bg-inherit hover:secondary-bg rounded-md"
        onClick={() => handleSet(data)}
      >
        <div className="px-3 py-3">
          <img
            ref={imageRef}
            src={data.profilePic}
            // src={dummyImage}
            onError={handleImageError}
            className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full"
          />
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="flex justify-between">
            <p className="text-sm">
              <strong>{data?.username}</strong>
            </p>
            <span className="opacity-55 pe-2 text-xs">{data.lastMsgTime}</span>
          </div>
          <p className="opacity-55 text-sm">{data.lastMsg}</p>
        </div>
      </div>
    </>
  );
};

export default ChatHeads;
