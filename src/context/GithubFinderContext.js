import { createContext, useReducer } from "react";
import { githubReducer } from "./githubReducer";



export const GithubFinderContext = createContext()
export const GithubProvider = ({ children }) => {
    // const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
    // const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)
    return <GithubFinderContext.Provider value={{ ...state, dispatch }}>
        {children}
    </GithubFinderContext.Provider>
}