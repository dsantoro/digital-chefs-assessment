import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders the button with the provided label", () => {
    const label = "Click me";
    const { getByText } = render(<Button text={label} />);
    const button = getByText(label);
    expect(button).toBeInTheDocument();
  });

  /*it("calls the onClick function when the button is clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick} text="Click me" />);
    const button = getByText("Click me");
    button.click();
    expect(onClick).toHaveBeenCalled();
  }); */

  it("applies the provided className to the button", () => {
    const className = "custom-button";
    const { container } = render(
      <Button className={className} text="Click me" />
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass(className);
  });
});
