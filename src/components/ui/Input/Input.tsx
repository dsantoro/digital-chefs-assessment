import React from "react";
import "./input.css";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string;
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <input {...rest} data-testid="input-element" />;
};

export default Input;
