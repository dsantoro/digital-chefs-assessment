import React, { useState } from "react";
import { useImages } from "./hooks";
import ThumbnailsGrid from "../../components/ThumbnailsGrid/ThumbnailsGrid";
import Select from "../../components/ui/Select";
import { objectToQueryString } from "../../utils/objectToQueryString";
import "./home.css";

const queryOptions = [
  { value: "beach", label: "Beach" },
  { value: "sunset", label: "Sunset" },
  { value: "animals", label: "Animals" },
];

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "magenta", label: "Magenta" },
];

const orientationOptions = [
  { value: "landscape", label: "Landscape" },
  { value: "portrait", label: "Portrait" },
];

const Home: React.FC = () => {
  const [queryState, setQueryState] = useState({ query: "sunset" });
  const { data, isLoading } = useImages(objectToQueryString(queryState));

  const updateQuery = (key: string, value: string) => {
    setQueryState({ ...queryState, [key]: value });
  };

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="filter-area">
        <Select
          options={queryOptions}
          selected={queryState.query}
          onChange={(e) => updateQuery("query", e.currentTarget.value)}
        />

        <Select
          selected="red"
          options={colorOptions}
          onChange={(e) => updateQuery("color", e.currentTarget.value)}
        />

        <Select
          selected="20"
          options={orientationOptions}
          onChange={(e) => updateQuery("orientation", e.currentTarget.value)}
        />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ThumbnailsGrid results={data?.results ?? []} />
      )}
    </div>
  );
};

export default Home;
