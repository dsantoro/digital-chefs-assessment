import React from "react";
import { Link } from "react-router-dom";
import "./thumbnail.css";

interface ThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  altText: string;
  link: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ imageUrl, altText, link }) => {
  return (
    <Link to={link} className="thumbnail">
      <img src={imageUrl} alt={altText} />
      <span>{altText}</span>
    </Link>
  );
};

export default Thumbnail;
