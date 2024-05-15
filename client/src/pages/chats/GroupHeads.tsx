import { useSearchParams } from "react-router-dom";
import { IGroupList, IPropsGroupHeads } from "./interface";

const GroupHeads: React.FC<IPropsGroupHeads> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSet(data: IGroupList) {
    setSearchParams({ with: data.name });
  }
  return (
    <>
      <div
        className="flex cursor-pointer bg-inherit hover:bg-slate-200 px-3 py-3 rounded-md space-x-3"
        onClick={() => handleSet(data)}
      >
        <div>
          <p className="bg-gray-300 w-[40px] h-[40px] rounded-full flex items-center justify-center">
            {data?.name[0].toUpperCase()}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="flex justify-between">
            <p className="text-sm">
              <span>#</span>
              {data?.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default GroupHeads;
