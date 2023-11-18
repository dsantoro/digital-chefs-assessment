import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Thumbnail from "./Thumbnail";

describe("Thumbnail component", () => {
  it("renders the thumbnail correctly", () => {
    const imageUrl = "https://example.com/image.jpg";
    const altText = "Example Image";
    const link = "/example";

    const { getByAltText, getByText } = render(
      <BrowserRouter>
        <Thumbnail imageUrl={imageUrl} altText={altText} link={link} />
      </BrowserRouter>
    );

    const thumbnailLink = getByText(altText);
    const thumbnailImage = getByAltText(altText);

    expect(thumbnailLink).toBeInTheDocument();
    expect(thumbnailImage).toBeInTheDocument();
    expect(thumbnailImage.getAttribute("src")).toBe(imageUrl);
    expect(thumbnailImage.getAttribute("alt")).toBe(altText);
  });
});
