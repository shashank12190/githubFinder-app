import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-8xl mb-8 font-bold">Opps!</h1>
          <p className="text-6xl mb-8">404 - Page not Found</p>

          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
