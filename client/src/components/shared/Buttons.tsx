interface IButton {
  type?: "submit" | "reset" | "button";
  title?: string;
  size?: string;
  onClick?: () => void;
}
export const Button = ({ type, title, size, onClick }: IButton) => {
  return (
    <button
      type={type}
      className={`btn ${type === "submit" ? "submit-btn" : "default-btn"} ${
        size === "full" && "w-full"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
