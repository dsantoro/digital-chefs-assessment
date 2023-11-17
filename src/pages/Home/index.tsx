import React, { useState } from "react";
import debounce from "lodash.debounce";
import { useImages } from "./hooks";
import { objectToQueryString } from "../../utils/objectToQueryString";
import ThumbnailsGrid from "../../components/ThumbnailsGrid/ThumbnailsGrid";
import Select from "../../components/ui/Select";
import Input from "../../components/ui/Input/Input";
import "./home.css";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "relevant", label: "Relevant" },
];

const Home: React.FC = () => {
  const [queryState, setQueryState] = useState({
    order_by: "latest",
    query: "animals",
    per_page: "30",
  });
  const { data, isLoading } = useImages(objectToQueryString(queryState));

  const updateQuery = (key: string, value: string) => {
    setQueryState({ ...queryState, [key]: value });
  };

  const handleSearch = (e: string) => {
    if (e === "") return updateQuery("query", "animals");
    updateQuery("query", e);
  };

  const debouncedHandleSearch = debounce(handleSearch, 500);

  return (
    <div className="container">
      <div className="filter-area">
        <Select
          options={sortOptions}
          onChange={(e) => updateQuery("order_by", e.currentTarget.value)}
        />

        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => debouncedHandleSearch(e.currentTarget.value)}
        />
      </div>

      <ThumbnailsGrid data={data?.results ?? []} loading={isLoading} />
    </div>
  );
};

export default Home;
