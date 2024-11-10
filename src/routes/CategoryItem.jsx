import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ title, thumbnail, desc }) {
  return (
    <li className="nav-item py-1 px-3 rounded-3">
      <Link className="nav-link active d-flex align-items-center gap-2" to={`/categories/${title.toLowerCase().replace(' ', '-')}`} data-bs-toggle="tooltip" data-bs-title={title} >
        <img src={thumbnail} className="w-25 object-fit-contain" alt={title} />
        <div>
          <h3
            style={{
              fontSize: "16px",
              marginBottom: '5px'
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              margin: 0
            }}
          >
            {desc.slice(0, 50) + "[...]"}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default CategoryItem;
