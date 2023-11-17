import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useImageDetails } from "./hooks";
import Button from "../../components/ui/Button";
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
        <Button onClick={goBack} text="Go back" />
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
