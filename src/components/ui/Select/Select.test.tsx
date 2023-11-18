import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Select from "./Select";

describe("Select component", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("renders select element with options", () => {
    const { getByTestId } = render(<Select options={options} />);
    const selectElement = getByTestId("select");
    expect(selectElement).toBeInTheDocument();

    options.forEach((option) => {
      const optionElement = getByTestId(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });
});
