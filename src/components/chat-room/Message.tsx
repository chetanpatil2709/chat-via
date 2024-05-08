import { IMessageProps } from "./interface";

const Message: React.FC<IMessageProps> = ({ data }) => {
  return (
    <>
      <div
        className={`flex ${data.sender ? "justify-end " : " justify-start "}`}
      >
        <div
          className={`w-full flex items-end gap-3 py-3 px-2 ${
            data.sender ? "flex-row-reverse" : ""
          }`}
        >
          <img
            src="/src/assets/tony.jpg"
            className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] rounded-full"
            alt="image"
          />
          <div className="max-w-[70%] bg-violet-600 text-white rounded-md py-2 px-3">
            <p>{data.msg}</p>
            <span
              className={`text-xs opacity-65 ${
                data.sender ? " float-start " : " float-end"
              }`}
            >
              02.50 AM
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
