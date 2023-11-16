import React, { HtmlHTMLAttributes } from "react";
import "./select.css";

interface SelectProps extends HtmlHTMLAttributes<HTMLSelectElement> {
  options: Record<string, string>[];
  selected: string;
}

const Select: React.FC<SelectProps> = ({ onChange, options }) => {
  return (
    <select onChange={onChange}>
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
