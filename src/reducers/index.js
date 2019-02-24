
const initialState = {
    username: null,
    repos: null,
    events: null,
}

export default (state = initialState, action) => {
    switch (action.type ) {
        case "UPDATE_USER":
            return {
                ...state,
                username: action.username,
            }
        case "UPDATE_REPOS": 
            console.log('UPDATE_REPOS:', action)
            return {
                ...state,
                repos: action.niceRepos,
            }
        case "UPDATE_EVENTS": 
            console.log('UPDATE_EVENTS:', action)
            return {
                ...state,
                events: action.niceEvents,
            }
        default: 
            return state
    }
}
