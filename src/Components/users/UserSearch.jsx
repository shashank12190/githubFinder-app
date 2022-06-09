import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext/AlertContext";
import {
  ACTIONS,
  searchUsers,
} from "../../context/GitHubContext/GithubActions";
import { GithubFinderContext } from "../../context/GithubFinderContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubFinderContext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: ACTIONS.SET_LOADING });
      const data = await searchUsers(text);
      dispatch({ type: ACTIONS.GET_USERS, payload: data });
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 input input-lg bg-gray-200 text-black border-none"
                value={text}
                onChange={handleChange}
                placeholder="Search"
              />
              <button className="absolute top-0 right-0 btn btn-lg rounded-l-none w-36 border-none">
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
