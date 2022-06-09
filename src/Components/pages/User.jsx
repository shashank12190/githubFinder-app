import { useEffect, useContext } from "react";
import { FaCodepen, FaUserFriends, FaUsers, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GithubFinderContext } from "../../context/GithubFinderContext";
import Spinner from "../layout/Spinner";
import RepoList from "../repos/RepoList";
import {
  ACTIONS,
  searchUserAndRepos,
} from "../../context/GitHubContext/GithubActions";
const User = () => {
  const params = useParams();
  const { user, loading, repos, dispatch } = useContext(GithubFinderContext);
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    const getUserData = async () => {
      dispatch({ type: ACTIONS.SET_LOADING });
      const userData = await searchUserAndRepos(params.login);
      dispatch({ type: ACTIONS.GET_USERS_AND_REPOS, payload: userData });
    };
    getUserData();
  }, [dispatch, params.login]);
  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="mb-4 btn sm:mt-4 btn-outline bg-gray-800">
        <Link to="/">Back to Search</Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image xl:mb-6 md:mb-0">
          <div className="card rounded-lg shadow-xl image-full relative">
            <figure>
              <img src={avatar_url} alt="" />
            </figure>
            <div className="card-body">
              <div className="absolute bottom-8 left-8">
                <h2 className="card-title text-4xl">{name}</h2>
                <p className="flex-grow-0 text-2xl">{login}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="card-title inline text-4xl">{name}</h1>
            <div className="badge badge-success ml-5 mr-2 align-top text-md ">
              {type}
            </div>
            {hireable && (
              <div className="badge badge-info text-md align-top">Hirable</div>
            )}
            <p className="text-lg">{bio}</p>
            <div className="card-actions mt-4">
              <a
                href={html_url}
                target={"_blank"}
                rel="noreferrer"
                className="btn btn-outline btn-xl"
              >
                Visit Github Profile
              </a>
            </div>
          </div>
          <div className="stats w-full bg-base-100 rounded-lg shadow-md p-4">
            {location && (
              <div className="stat">
                <div className="stat-title text-md">Location</div>
                <div className="stat-value text-lg">{location}</div>
              </div>
            )}
            {blog && (
              <div className="stat">
                <div className="stat-title text-md">Website</div>
                <div className="stat-value text-lg">{blog}</div>
              </div>
            )}
            {twitter_username && (
              <div className="stat">
                <div className="stat-title text-md">Twitter</div>
                <div className="stat-value text-lg">{twitter_username}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full bg-base-100 shadow-lg rounded-lg mb-6 p-8">
        <div className="stats grid grid-cols-1 md:grid-cols-4">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5">{followers}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5">{following}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5">{public_repos}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5">{public_gists}</div>
          </div>
        </div>
      </div>
      <RepoList repos={repos} />
    </div>
  );
};

export default User;
