import React, { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";

function Routes() {
  return (
    <div className="p-0">
      <h4 className="text-light">Categories</h4>
      <hr />
      <nav className="navbar" data-bs-theme="dark">
          <Categories />
      </nav>
    </div>
  );
}

export default Routes;
