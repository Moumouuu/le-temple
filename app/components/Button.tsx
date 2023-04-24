import React from "react";

interface ButtonProps {
  label: string;
  action: () => void;
  large?: boolean;
}

const Button = ({ label, action, large }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`border-4 border-[#095234] bg-transparent rounded-xl hover:bg-[#095234] hover:text-white duration-300 ease-in-out
      ${large ? "text-xl px-5 py-3" : "p-2"} `}
    >
      {label}
    </button>
  );
};

export default Button;
