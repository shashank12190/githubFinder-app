import axios from "axios";
export const ACTIONS = {
    GET_USERS: "GET_USERS",
    GET_USERS_AND_REPOS: "GET_USER_AND_REPOS",
    SET_LOADING: 'SET_LOADING',
    CLEAR_USERS: 'CLEAR_USERS'
}

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
console.log(GITHUB_TOKEN);

const github = axios.create({
    baseURL: GITHUB_URL,
    // headers: { Authorization: `token ${GITHUB_TOKEN}` }
})

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })
    const response = await github.get(`/search/users?${params}`)
    // console.log(response.data.items);
    return response.data.items
};

export const searchUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })
    const response = await Promise.all([github.get(`/users/${login}`), github.get(`/users/${login}/repos?${params}`)])
    const [user, repos] = response
    if (response.status === 404) {
        window.location('/not-found')
    }

    return { user: user.data, repos: repos.data }
};

