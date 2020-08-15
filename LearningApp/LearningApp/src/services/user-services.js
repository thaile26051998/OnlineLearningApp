import API from '../api/api';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthenticationContext } from "../provider/authentication-provider";
import React, { useEffect, useState, useContext } from "react";

//register
const apiRegister = (data) => {
    return API.post("user/register", data)
}

//activate email
const apiActivateEmail = () => {
    return API.post("user/send-activate-email")
}

//getUserInfo
const apiGetUserInfo = (config) => {
    return API.get("user/me", config)
}

//send email forgot password
const apiSendMailForgotPass = () => {
    return API.post("user/forgot-pass/send-email")
}

//reset password
const apiResetPassword = (id, password) => {
    return API.post("user/reset-password", {
        id: id,
        password: password
    })
}

//change password
const apiChangePassword = (id, oldPass, newPass) => {
    return API.post("user/change-password", {
        id: id,
        oldPass: oldPass,
        newPass: newPass
    })
}

//update user info
const apiUpdateUserInfo = (name, avatar, phone, config) => {
    return API.put("user/update-profile", {
        name: name,
        avatar: avatar,
        phone: phone
    }, config)
}

//get favorite courses
const apiGetFavoriteCourses = (config) => {
    return API.get("user/get-favorite-courses", config)
}

//get process courses
export const apiGetProcessCourses = (config) => {
    return API.get("user/get-process-courses", config)
}

//like course
const apiLikeCourse = (data, config) => {
    return API.post("/user/like-course", data, config)
}

//get course like status
const apiGetCourseLikeStatus = (courseId, config) => {
    return API.get(`/user/get-course-like-status/${courseId}`, config)
}

//get recommendation courses
const apiGetRecommendationCourses = (id) => {
    const limit = 20;
    const offset = 1;
    return API.get(`user/recommend-course/${id}/${limit}/${offset}`)
}

export { apiGetFavoriteCourses, apiLikeCourse, apiGetRecommendationCourses, apiGetCourseLikeStatus, apiGetUserInfo, apiUpdateUserInfo }