import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <h1 className="mt-4 fs-2 mb-5" style={{ fontSize: "46px" }}>
          404 Page NOT Found
        </h1>
        <p className="mt" style={{ fontSize: "20px" }}>
          We couldn’t find the page you were looking for. Visit &nbsp;
          <Link to="/" style={{ textDecoration: "none" }}>
            Zerodha’s home page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
