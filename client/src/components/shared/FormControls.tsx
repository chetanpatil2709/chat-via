interface IInputProps {
  name?: string;
  type?: string;
  label?: string;
}
export const Input = ({ name, label, type }: IInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        className="border py-2 px-3 outline-none rounded-sm"
      />
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
