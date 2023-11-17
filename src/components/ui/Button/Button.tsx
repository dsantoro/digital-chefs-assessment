import React from "react";
import { Slot } from "@radix-ui/react-slot";
import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text = "My button",
  asChild,
  ...rest
}) => {
  const Comp = asChild ? Slot : "button";

  return <Comp {...rest}>{text}</Comp>;
};

export default Button;
