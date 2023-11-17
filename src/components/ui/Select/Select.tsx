import React, { HtmlHTMLAttributes } from "react";
import "./select.css";

interface SelectProps extends HtmlHTMLAttributes<HTMLSelectElement> {
  options: Record<string, string>[];
}

const Select: React.FC<SelectProps> = ({ options, ...rest }) => {
  return (
    <select {...rest}>
      {options.map((option) => (
        <option
          key={option.value}
          defaultValue={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
