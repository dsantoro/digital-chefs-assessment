import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Header from "./index";

describe("Header component", () => {
  it("renders the header title correctly", () => {
    const { getByText } = render(<Header />);
    const headerTitle = getByText("Digital Chefs Assessment");
    expect(headerTitle).toBeInTheDocument();
  });
});
