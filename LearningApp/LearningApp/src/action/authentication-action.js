import { apiLogin, apiSignUp } from '../services/authentication-services';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import Strings from '../global/string';

export const LOGIN_SUCCESSED = "LOGIN_SUCCESSED"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const SIGNUP_SUCCESSED = "SIGNUP_SUCCESSED"
export const SIGNUP_FAILED = "SIGNUP_FAILED"
export const LOGOUT_SUCCESSED = "LOGOUT_SUCCESSED"


const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESSED,
        data
    }
}

const loginFail = () => {
    return {
        type: LOGIN_FAILED
    }
}

const signUpSuccess = (data) => {
    return {
        type: SIGNUP_SUCCESSED,
        data
    }
}

const signUpFail = () => {
    return {
        type: SIGNUP_FAILED
    }
}

const logOutSuccess = () => {
    return {
        type: LOGOUT_SUCCESSED
    }
}

const storeData = async (response) => {
    try {
        //    await AsyncStorage.setItem('app-token', response.data.token)
        await AsyncStorage.setItem('user-id', 'ba77b670-05e0-44f0-a093-3b0962366cdd')
        console.log('get token successfully' + " " + response.data.userInfo.id)
    } catch (e) {
        console.log('error')
    }
}

export const login = (dispatch) => (username, password) => {
    apiLogin(username, password).then((response) => {
        if (response.status === 200) {
            dispatch(loginSuccess(response.data))

            storeData(response)
        } else {
            dispatch(loginFail())
            Alert.alert(
                "",
                Strings.emailPassInvalid,
                [
                    {
                        text: Strings.CANCEL,
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: Strings.OK,
                        onPress: () => {
                            console.log("OK Pressed")
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    }).catch((error) => {
        dispatch(loginFail())
        Alert.alert(
            "",
            Strings.emailPassInvalid,
            [
                {
                    text: Strings.CANCEL,
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: Strings.OK,
                    onPress: () => {
                        console.log("OK Pressed")
                    },
                },
            ],
            { cancelable: false }
        );
    });
}

export const signup = (dispatch) => (username, email, phone, password) => {
    apiSignUp(username, email, phone, password).then((response) => {
        if (response.status === 200) {
            dispatch(signUpSuccess(response.data))
            console.log(response.data)
        } else {
            dispatch(signUpFail())
        }
    }).catch((error) => {
        dispatch(signUpFail())
    });
}

export const logout = (dispatch) => () => {
    dispatch(logOutSuccess())
}