import React from "react";
import { FaEye, FaLink, FaStar, FaInfo, FaUtensils } from "react-icons/fa";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2card rounded-md shadow-md bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className=" mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline mr-2" />
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="my-auto">
          <div className="badge badge-info mr-5 badge-lg">
            <FaEye />
            {watchers_count}
          </div>
          <div className="badge badge-success mr-5 badge-lg">
            <FaStar />
            {stargazers_count}
          </div>
          <div className="badge badge-error mr-5 badge-lg">
            <FaInfo />
            {open_issues}
          </div>
          <div className="badge badge-warning mr-5 badge-lg">
            <FaUtensils />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.defaultProps = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
