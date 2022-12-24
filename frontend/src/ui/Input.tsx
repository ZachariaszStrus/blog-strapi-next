import React, { FC, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onClick?: () => void;
}

const Input: FC<InputProps> = ({ onClick, ...props }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative text-gray-600 focus-within:text-gray-400"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer text-primary-300" />
      </span>
      <input
        className={`rounded-md border border-transparent bg-gray-900 py-2 pl-10 text-sm text-fg-faded focus:outline-none ${
          hover && props.readOnly && "border border-primary-300"
        } ${props.readOnly && "cursor-pointer"} ${
          !props.readOnly && "focus:border focus:border-primary-300"
        } w-full`}
        placeholder="Search..."
        autoComplete={"off"}
        {...props}
      />
    </div>
  );
};

export default Input;
