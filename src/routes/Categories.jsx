import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

function Categories() {
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        console.error(response);
        return;
      }

      setCats(data.categories);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <ul className="navbar-nav">
      {cats.map((item, index) => {
        return (
          <CategoryItem
            key={index}
            title={item.strCategory}
            thumbnail={item.strCategoryThumb}
            desc={item.strCategoryDescription}
          />
        );
      })}
    </ul>
  );
}

export default Categories;
