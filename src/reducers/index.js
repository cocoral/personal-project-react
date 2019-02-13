
const initialState = {
    isLoggedIn: false,
    username: null,
    repos: null,
    isReposUpdated: false,
    events: null,
    isEventsUpdated: false,
}

export default (state = initialState, action) => {
    switch (action.type ) {
        case "UPDATE_USER":
            return {
                ...state,
                username: action.username,
                isLoggedIn: true
            }
        case "UPDATE_REPOS": 
            console.log('UPDATE_REPOS:', action)
            return {
                ...state,
                repos: action.niceRepos,
                isReposUpdated: true
            }
        case "UPDATE_EVENTS": 
            console.log('UPDATE_EVENTS:', action)
            return {
                ...state,
                events: action.niceEvents,
                isEventsUpdated: true
            }
        default: 
            return state
    }
}
