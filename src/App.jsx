import { useState } from "react";
import "./App.css";
import Routes from "./routes/Routes";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3 sidebar bg-dark">
          <Routes />
        </div>
        <div className="col-lg-10 col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
