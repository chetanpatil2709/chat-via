interface IButton {
  type?: "submit" | "reset" | "button";
  title?: string;
  onClick?: () => void;
}
export const Button = ({ type, title, onClick }: IButton) => {
  return (
    <button
      type={type}
      className={`btn ${
        type === "button"
          ? "default-btn"
          : type === "submit"
          ? "submit-btn"
          : "default-btn"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
