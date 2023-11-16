import { useQuery } from "react-query";

export interface IImage {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    full: string;
  };
}

const fetchImageById = async (id: string) => {
  const res = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23`
  );
  return res.json();
};

export const useImageDetails = (id: string) => {
  const { data, isLoading, error } = useQuery<IImage>(["images", id], () =>
    fetchImageById(id)
  );
  return { data, isLoading, error };
};
