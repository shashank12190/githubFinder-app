import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  return (
    <div className="card rounded-lg shadow-lg bg-base-100 ">
      <div className="card-body">
        <h2 className="text-3xl font-bold card-title my-4">Top Repository</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

RepoList.defaultProps = {
  repos: PropTypes.array.isRequired,
};
export default RepoList;
