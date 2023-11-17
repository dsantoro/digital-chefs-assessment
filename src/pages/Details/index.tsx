import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useImageDetails } from "./hooks";
import "./details.css";

interface DetailsProps {}

const Details: React.FC<DetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { goBack } = useHistory();
  const { data, isLoading } = useImageDetails(id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="details">
        <button onClick={goBack}>Back</button>
        <img
          src={data?.urls.regular}
          alt={data?.alt_description}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Details;
