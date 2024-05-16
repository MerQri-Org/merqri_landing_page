import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ bgColor, text, color }) => {
  return (
    <div className="flex items-center">
      <button
        className={`py-2 px-6 rounded-lg cursor-pointer hover:scale-[1.1] flex items-center gap-3`}
        style={{ backgroundColor: bgColor, color: color }}
      >
        {text}
        <GoArrowUpRight />
      </button>
    </div>
  );
};

export default Button;
