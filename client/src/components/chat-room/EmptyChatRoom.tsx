import { LuMessagesSquare } from "react-icons/lu";

const EmptyChatRoom = () => {
  return (
    <div className="w-full md:col-span-2 hidden h-full sm:grid place-content-center">
      <div className="flex flex-col items-center bg-gray-100 rounded-md p-6">
        <LuMessagesSquare size={50} className="text-violet-600" />
        <p>Select user and start messiging...</p>
      </div>
    </div>
  );
};

export default EmptyChatRoom;
