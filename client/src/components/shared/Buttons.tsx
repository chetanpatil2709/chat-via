import { FormEvent } from "react";

interface IButton {
  type?: "submit" | "reset" | "button";
  title?: string;
  size?: string;
  color?: string;
  onClick?: (e: FormEvent) => void;
}
export const Button = ({ type, title, color, size, onClick }: IButton) => {
  return (
    <button
      type={type}
      className={`btn 
      ${
        color === "primary"
          ? "primary-btn"
          : color === "loading"
          ? "loading-btn"
          : "default-btn"
      } 
      ${size === "full" && "w-full"}
      `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
