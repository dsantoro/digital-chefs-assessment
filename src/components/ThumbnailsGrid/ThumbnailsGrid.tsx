import React from "react";
import Thumbnail from "../Thumbnail";
import { IImage } from "../../pages/Home/hooks";

interface ThumbnailsGridProps {
  data: {
    results: IImage[];
  };
}

const ThumbnailsGrid: React.FC<ThumbnailsGridProps> = ({ data }) => {
  // Implement component logic here
  return (
    <div className="thumbnails-grid">
      {data.results.map((image: IImage) => (
        <div className="thumbnail-container" key={image.id}>
          <Thumbnail
            link={`/details/${image.id}`}
            imageUrl={image.urls.regular}
            altText={image.alt_description}
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailsGrid;
