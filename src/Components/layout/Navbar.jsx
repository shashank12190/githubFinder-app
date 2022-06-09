import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Navbar = ({ title }) => {
  return (
    <>
      <nav className="navbar h-12 bg-neutral text-neutral-content">
        <div className="container justify-between ">
          <div>
            <FaGithub className="inline text-3xl text-white" />
            <Link
              className="px-2 font-bold text-lg align-middle text-white"
              to="/"
            >
              {title}
            </Link>
          </div>
          <div>
            <Link
              className="space-x-2 btn btn-ghost rounded-btn btn-sm text-white"
              to={"/"}
            >
              HOME
            </Link>
            <Link
              className="space-x-2 btn btn-ghost rounded-btn btn-sm text-white"
              to="/about"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
