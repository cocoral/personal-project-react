import { combineReducers } from 'redux';


const userReducer = () => {
    return 'insert your github handler below to view your repos'
};

const logInHandler = (username = null, action) => {
    switch (action.type ) {
        case "UPDATE_USER":
            //????? Update the store
            return {username: action.payload}
        default: 
            return username
    }
}

export default combineReducers({
    username: userReducer,
    logInHandler: logInHandler
})