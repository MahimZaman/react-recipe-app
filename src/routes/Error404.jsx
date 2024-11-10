import React from "react";
import { useRouteError } from "react-router-dom";

function Error404() {
  const error = useRouteError();
  return (
    <div className="error-page text-center text-light d-flex align-items-center justify-content-center flex-column" style={{
        minHeight: '100vh'
    }}>
      <h1>404 Not Found!</h1>
      <p>Sorry, the page doesn't exist</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error404;
