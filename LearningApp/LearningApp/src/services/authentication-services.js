import API from '../api/api';

//log in
export const apiLogin = (username, password) => {
    return API.post("user/login", { email: username, password: password })
}

//sign up
export const apiSignUp = (username, email, phone, password) => {
    return API.post("user/register", {
        username: username,
        email: email,
        phone: phone,
        password: password
    })
}

//send email activate user account
export const apiSendMailActivate = (email) =>{
    return API.post("user/send-activate-email", { email: email })
}

//send email forgot password
export const apiSendMailForgotPass = (email) => {
    return API.post("user/forget-pass/send-email", { email: email })
}