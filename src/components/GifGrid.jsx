import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, IsLoading } = useFetchGifs(category);

  return (
    <div>
      <h3>{category}</h3>
      {IsLoading && <h1>Cargando.....</h1>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
