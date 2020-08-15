import { LOGIN_SUCCESSED, LOGIN_FAILED, SIGNUP_SUCCESSED, SIGNUP_FAILED, LOGOUT_SUCCESSED } from "../action/authentication-action";

export const reducer = (prevState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSED:
            return { ...prevState, isAuthenticated: true, isAuthenticating: true, token: action.data.token, userInfo: action.data.userInfo }
        case LOGIN_FAILED:
            return { ...prevState, isAuthenticated: false }
        case SIGNUP_SUCCESSED:
            return { ...prevState, isSignedUp: true, isAuthenticating: true, isAuthenticated: false }
        case SIGNUP_FAILED:
            return { ...prevState, isSignedUp: false }
        case LOGOUT_SUCCESSED:
            return {...prevState, isAuthenticated: false, isAuthenticating: false}
        default:
            throw new Error();
    }
}