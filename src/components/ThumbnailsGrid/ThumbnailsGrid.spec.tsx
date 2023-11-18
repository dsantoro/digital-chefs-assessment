import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ThumbnailsGrid from ".";

describe("ThumbnailsGrid component", () => {
  it("renders no results message when data is empty and not loading", () => {
    const { getByText } = render(<ThumbnailsGrid data={[]} />);
    const noResultsMessage = getByText("No results found 😖😖😖");
    expect(noResultsMessage).toBeInTheDocument();
  });

  it("renders loading skeletons when loading is true", () => {
    const { getAllByTestId } = render(<ThumbnailsGrid data={[]} loading />);
    const skeletonContainers = getAllByTestId("thumbnail-skeleton");
    expect(skeletonContainers.length).toBe(10);
  });

  it("renders thumbnails when data is not empty and not loading", () => {
    const data = [
      {
        id: "1",
        urls: {
          regular: "https://example.com/image1.jpg",
        },
        alt_description: "Image 1",
      },
      {
        id: "2",
        urls: {
          regular: "https://example.com/image2.jpg",
        },
        alt_description: "Image 2",
      },
    ];
    const { getAllByTestId } = render(
      <BrowserRouter>
        <ThumbnailsGrid data={data} />
      </BrowserRouter>
    );
    const thumbnailContainers = getAllByTestId("thumbnail-container");
    expect(thumbnailContainers.length).toBe(data.length);
  });
});
