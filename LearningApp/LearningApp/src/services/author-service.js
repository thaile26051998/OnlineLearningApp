import API from '../api/api';

//get all instructor
const apiGetAllInstructor = () => {
    return API.get("instructor")
}

//get instructor detail info
const apiGetInstructorDetail = (id) => {
    return API.get(`instructor/detail/${id}`)
}

export {apiGetAllInstructor, apiGetInstructorDetail}