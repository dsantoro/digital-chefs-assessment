import React from "react";
import Thumbnail from "../Thumbnail";
import { IImage } from "../../pages/Home/hooks";

interface ThumbnailsGridProps {
  data: IImage[];
  loading?: boolean;
}

const ThumbnailsGrid: React.FC<ThumbnailsGridProps> = ({ data, loading }) => {
  if (!loading && data.length === 0) return <h1>No results found 😖😖😖</h1>;

  return (
    <div className="thumbnails-grid">
      {loading
        ? Array.from({ length: 10 }).map((_, i) => (
            <div
              className="thumbnail-container skeleton"
              data-testid="thumbnail-skeleton"
              key={i}
            />
          ))
        : data.map((image: IImage) => (
            <div
              className="thumbnail-container"
              key={image.id}
              data-testid="thumbnail-container"
            >
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
