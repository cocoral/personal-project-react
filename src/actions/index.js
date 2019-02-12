//Action creator
export const logInHandler = username => {
    return {
        type: "UPDATE_USER",
        payload: username
    }
}