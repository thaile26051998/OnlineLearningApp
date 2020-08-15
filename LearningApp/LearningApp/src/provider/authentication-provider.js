import React, {useReducer} from 'react'
import {reducer} from "../reducer/authentication-reducer"
import {login, signup, logout} from "../action/authentication-action"

const AuthenticationContext = React.createContext()

const initialState = {
    isSignedUp: false,
    isAuthenticated: false,
    isAuthenticating: false,
    userInfo: null,
    token: null 
}

const AuthenticationProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <AuthenticationContext.Provider value={{state, login: login(dispatch), signup: signup(dispatch), logout: logout(dispatch)}}>
        {props.children}
    </AuthenticationContext.Provider>
}

export {AuthenticationProvider, AuthenticationContext}