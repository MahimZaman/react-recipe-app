import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MealItem from "./MealItem";

function Meals() {
  const params = useLoaderData();

  const [meals, setMeals] = useState([]);

  const getRecipes = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.catId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        console.error(response);
        return;
      }

      setMeals(data.meals);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    getRecipes();
  }, [meals])


  return (
    <div className="d-flex flex-wrap align-items-stretch gap-3 px-2 py-5">
      {meals.map((item, index) => {
        return (
          <MealItem key={index} title={item.strMeal} mealId={item.idMeal} thumbnail={item.strMealThumb}/>
        );
      })}
    </div>
  );
}

export default Meals;
