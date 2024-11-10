import React from "react";
import { Link } from "react-router-dom";

function MealItem({ title, thumbnail, mealId }) {
  return (
    <Link to={`/recipe/${mealId}`} className="text-decoration-none d-flex">
      <div
        className="card bg-dark text-light"
        style={{
          width: "18rem",
        }}
      >
        <img
          src={`${thumbnail}`}
          className="card-img-top"
          alt={title}
          style={{
            height: "250px",
            objectFit: "cover",
          }}
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title text-light fs-5">{title}</h5>
        </div>
      </div>
    </Link>
  );
}

export default MealItem;
