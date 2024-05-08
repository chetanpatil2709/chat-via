import { useSearchParams } from "react-router-dom";
import { IList, IPropsChatHeads } from "./interface";

const ChatHeads: React.FC<IPropsChatHeads> = ({ data }) => {
  //   const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSet(data: IList) {
    setSearchParams({ with: data.name });
  }
  return (
    <>
      <div
        className="flex cursor-pointer bg-inherit hover:secondary-bg rounded-md"
        onClick={() => handleSet(data)}
      >
        <div className="px-3 py-3">
          <img
            src={data.image}
            className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full"
          />
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="flex justify-between">
            <p className="text-sm">
              <strong>{data?.name}</strong>
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
