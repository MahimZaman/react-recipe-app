import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function MealDetails() {
  const [detail, setDetail] = useState([]);

  const params = useLoaderData();

  const getDetail = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        console.error(response);
        return;
      }

      setDetail(data.meals[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDetail();
    console.log(detail);
  }, []);

  return (
    <div className="container px-3 py-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="img-fluid rounded-4"
            src={detail.strMealThumb}
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <h1>{detail.strMeal}</h1>
          <div>
            <strong>Category:</strong> {detail.strCategory}
          </div>
          <div>
            <strong>Area:</strong> {detail.strArea}
          </div>
          <table className="table table-striped table-dark my-4">
            <tbody>
              {[...Array(20)].map((_, i) => {
                if (detail["strMeasure" + i]) {
                  return (
                    <tr key={i}>
                      <th>{detail["strIngredient" + i]}</th>
                      <td>{detail["strMeasure" + i]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-12">
          <h1>Description</h1>
          <hr />
          <article className="mb-5">{detail.strInstructions}</article>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;
