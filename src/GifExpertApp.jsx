import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Developer"]);

  const onAddCategories = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return;
    setCategories((categories) => [onNewCategory, ...categories]);
  };

  return (
    <>
      <div className="titleContainer">
        <h1 className="title">GifExpertApp</h1>
      </div>

      <div className="inputContainer">
        <AddCategory onNewCategory={onAddCategories} />
      </div>

      {categories.map((categories) => {
        return <GifGrid key={categories} category={categories} />;
      })}
    </>
  );
};
