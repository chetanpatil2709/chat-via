interface IAlertProps {
  status?: number;
  text?: string;
  show?: boolean;
}
const Alert = ({ status, text }: IAlertProps) => {
  return (
    <div
      className={`w-full text-center py-3 rounded-sm ${
        status === 200
          ? "bg-green-100 text-green-950"
          : status === 400
          ? "bg-red-100 text-red-950"
          : "bg-white text-black"
      }`}
    >
      {text}
    </div>
  );
};

export default Alert;
