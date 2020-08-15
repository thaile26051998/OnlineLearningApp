import API from '../api/api';

//get top sell courses
const apiGetTopSellCourses = () => {
    return API.post("course/top-sell", {
        limit: 20,
        page: 1
    })
}

//get top new courses
const apiGetTopNewCourses = () => {
    return API.post("/course/top-new", {
        limit: 20,
        page: 1
    })
}

//get top rate courses
const apiGetTopRateCourses = () => {
    return API.post("/course/top-rate", {
        limit: 20,
        page: 1
    })
}

//get course detail info
const apiGetCourseDetailInfo = (id, userId) => {
    return API.get(`/course/get-course-detail/${id}/${userId}`)
}

//get course with lesson
const apiGetCourseWithLesson = (courseId, config) => {
    return API.get(`/course/detail-with-lesson/${courseId}`, config)
}

//get progress of course
const apiGetProgressCourse = (courseId, config) => {
    return API.get(`/course/process-course/${courseId}`, config)
}

//get free course
const apiGetFreeCourse = (courseId, config) => {
    return API.post("/payment/get-free-courses", { courseId: courseId }, config)
}

//check own course
const apiCheckOwnCourse = (courseId, config) => {
    return API.get(`/user/check-own-course/${courseId}`, config)
}

//search course
const apiSearchCourse = (token, keyword) => {
    return API.post("course/searchV2", {
        token: token,
        keyword: keyword,
        limit: 10,
        offset: 0,
    })
}

//get search history
const apiGetSearchHistory = (config) => {
    return API.get("course/search-history", config)
}

//delete search history
const apiDeleteSearchHistory = (id, config) => {
    return API.delete(`course/delete-search-history/${id}`, config)
}

//get student course rating
const apiGetStudentCourseRating = (courseId, config) => {
    return API.get(`course/get-rating/${courseId}`, config)
}

//rate course
const apiRateCourse = (courseId, formalityPoint, contentPoint, presentationPoint, content, config) => {
    return API.post("course/rating-course", {
        courseId: courseId,
        formalityPoint: formalityPoint,
        contentPoint: contentPoint,
        presentationPoint: presentationPoint,
        content: content
    }, config)
}

//get lesson video detail
const apiGetLessonVideo = (courseId, lessonId, config) => {
    return API.get(`lesson/video/${courseId}/${lessonId}`, config)
}

//get lesson homework
const apiGetLessonHomework = (lessonId, config) => {
    return API.post("/exercise/student/list-exercise-lesson", { lessonId: lessonId }, config)
}


export { apiGetTopSellCourses, apiGetTopNewCourses, apiGetTopRateCourses, apiGetCourseDetailInfo, apiGetProgressCourse, apiGetFreeCourse, apiCheckOwnCourse, apiSearchCourse, apiGetSearchHistory, apiDeleteSearchHistory, apiGetCourseWithLesson, apiGetStudentCourseRating, apiRateCourse, apiGetLessonVideo, apiGetLessonHomework }

