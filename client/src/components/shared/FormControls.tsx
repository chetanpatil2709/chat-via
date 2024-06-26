import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface IInputProps {
  name?: string;
  type?: string;
  label?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ name, label, type, error, onChange }: IInputProps) => {
  const [passType, setPassType] = useState("password");
  const handlePassType = () =>
    setPassType(passType === "password" ? "text" : "password");
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <input
          type={type === "password" ? passType : type}
          name={name}
          id={name}
          className="w-full border py-2 px-3 outline-none rounded-sm"
          onChange={onChange}
        />
        {error && <span className="text-sm text-red-700">{error}</span>}
        {/* switch password type */}
        {type === "password" && (
          <span
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handlePassType}
          >
            {passType === "password" ? (
              <IoEyeOutline size={24} />
            ) : (
              <IoEyeOffOutline size={24} />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export const Textarea = ({ name, label }: IInputProps) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        className="border py-2 px-3 w-full outline-none rounded-sm"
      ></textarea>
    </div>
  );
};
