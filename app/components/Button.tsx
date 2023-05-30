"use client";
import React from "react";
import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  danger?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  danger,
  disabled,
  fullWidth,
  onClick,
  secondary,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        `flex justify-center py-2 px-3 rounded-md text-sm font-semibold
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        fullWidth && "w-full",
        secondary
          ? "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-offset-gray-100"
          : "text-white bg-sky-600 hover:bg-sky-700 focus:ring-offset-sky-600",
        danger &&
          "text-white bg-rose-600 hover:bg-rose-700 focus:ring-offset-rose-600",
        disabled && "opacity-50 cursor-not-allowed",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-500 "
      )}
    >
      {children}
    </button>
  );
};

export default Button;
