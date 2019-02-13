import { combineReducers } from 'redux';


const initialState = {
    isLoggedIn: false,
    username: null,
    repos: [],
    isReposUpdated: false,
    events: [],
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
