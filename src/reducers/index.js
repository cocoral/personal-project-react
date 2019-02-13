import { combineReducers } from 'redux';


const initialState = {
    isLoggedIn: false,
    username: null,
    repos: [],
    events: []
}

export default (state = initialState, action) => {
    switch (action.type ) {
        case "UPDATE_USER":
            return {
                ...state,
                username: action.username,
                isLoggedIn: true
            }
        default: 
            return state
    }
}
