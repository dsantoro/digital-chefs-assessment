import { useQuery } from "react-query";

export interface IImage {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
}

interface IResponse {
  total: number;
  total_pages: number;
  results: IImage[];
}

const fetchImages = async (options = "query=beach") => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?${options}&client_id=0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23`
  );
  return res.json();
};

export const useImages = (options: string) => {
  const { data, isLoading, error } = useQuery<IResponse[]>(
    ["images", options],
    () => fetchImages(options)
  );
  return { data, isLoading, error };
};
