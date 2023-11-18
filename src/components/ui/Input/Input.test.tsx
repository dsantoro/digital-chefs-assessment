import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("renders input element with the provided type", () => {
    const { getByTestId } = render(<Input type="text" />);
    const inputElement = getByTestId("input-element");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("passes down additional props to the input element", () => {
    const { getByTestId } = render(
      <Input type="text" placeholder="Enter text" />
    );
    const inputElement = getByTestId("input-element");
    expect(inputElement).toHaveAttribute("placeholder", "Enter text");
  });

  // it("triggers onChange event when input value changes", () => {
  //   const handleChange = jest.fn();
  //   const { getByTestId } = render(
  //     <Input type="text" onChange={handleChange} />
  //   );
  //   const inputElement = getByTestId("input-element");
  //   fireEvent.change(inputElement, { target: { value: "Hello" } });
  //   expect(handleChange).toHaveBeenCalledTimes(1);
  //   expect(inputElement).toHaveValue("Hello");
  // });
});
