import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    const imgs = await getGifs({ category });
    setImages(imgs);
    setLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    loading: loading,
  };
};
