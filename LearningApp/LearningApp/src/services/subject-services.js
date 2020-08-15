import API from '../api/api';

//get all categories
export const apiGetAllCategories = () => {
    return API.get("category/all")
}

//get category detail
export const apiGetCategoryDetail = (id) => {
    return API.post("course/search", {
        keyword: "",
        limit: 10,
        offset: 1,
        opt: {
            category: id
        }
    })
}

