import React from "react";
import { Link, Outlet } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="mt-20 flex flex-center flex-col">
      <p>404</p>
      <p>Oops!PageNotFound</p>
      <Link to="/">
        <button className="border">Go Back</button>
      </Link>
      <Outlet/>
    </div>
  );
}

export default PageNotFound;
