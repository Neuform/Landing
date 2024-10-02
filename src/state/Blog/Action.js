import axios from "axios"
import { api, API_BASE_URL } from "../../config/apiConfig"
import { CREATE_BLOG_FAILURE, CREATE_BLOG_REQUEST, CREATE_BLOG_SUCCESS, DELETE_BLOG_FAILURE, DELETE_BLOG_REQUEST, DELETE_BLOG_SUCCESS, GET_ALL_BLOGS_FAILURE, GET_ALL_BLOGS_REQUEST, GET_ALL_BLOGS_SUCCESS, GET_BLOG_BY_ID_FAILURE, GET_BLOG_BY_ID_REQUEST, GET_BLOG_BY_ID_SUCCESS, GET_USER_BLOGS_FAILURE, GET_USER_BLOGS_REQUEST, GET_USER_BLOGS_SUCCESS } from "./ActionType"

const getUserBlogsRequest = () => ({type:GET_USER_BLOGS_REQUEST})
const getUserBlogsSuccess = (blogs) => ({type:GET_USER_BLOGS_SUCCESS,payload:blogs})
const getUserBlogsFailure = (error) => ({type:GET_USER_BLOGS_FAILURE,payload:error})

export const getUserBlogs = (userId) => async(dispatch) =>{

    dispatch(getUserBlogsRequest())

    try {
        const response = await api.get(`${API_BASE_URL}/blog/${userId}`)
        dispatch(getUserBlogsSuccess(response.data))
    } catch (error) {
        dispatch(getUserBlogsFailure(error.message))
    }
}

const getAllBlogsRequest = () => ({type:GET_ALL_BLOGS_REQUEST})
const getAllBlogsSuccess = (blogs) => ({type:GET_ALL_BLOGS_SUCCESS,payload:blogs})
const getAllBlogsFailure = (error) => ({type:GET_ALL_BLOGS_FAILURE,payload:error})

export const getAllBlogs = () => async(dispatch)=>{

    dispatch(getAllBlogsRequest())

    try {
        const response = await api.get(`${API_BASE_URL}/blog/all`)
        const blogs = response.data
        console.log("redux-check",blogs)
        dispatch(getAllBlogsSuccess(blogs))
    } catch (error) {
        dispatch(getAllBlogsFailure(error.message))
    }
}

const getBlogByIdRequest = () => ({type:GET_BLOG_BY_ID_REQUEST})
const getBlogByIdSuccess = (blog) => ({type:GET_BLOG_BY_ID_SUCCESS,payload:blog})
const getBlogByIdFailure = (error) => ({type:GET_BLOG_BY_ID_FAILURE,payload:error})

export const getBlogById = (id) => async(dispatch)=>{
    dispatch(getBlogByIdRequest())

    try {
        const response = await api.get(`${API_BASE_URL}/blog/${id}/details`)
        const blog = response.data
        dispatch(getBlogByIdSuccess(blog))
    } catch (error) {
        dispatch(getBlogByIdFailure(error.message))
    }
}

const createBlogRequest = () => ({type:CREATE_BLOG_REQUEST})
const createBlogSuccess = (blog) => ({type:CREATE_BLOG_SUCCESS,payload:blog})
const createBlogFailure = (error) => ({type:CREATE_BLOG_FAILURE,payload:error})

export const createBlog = (blogData) => async(dispatch)=>{

    dispatch(createBlogRequest())
    try {
        console.log(blogData)
        const response = await api.post(`${API_BASE_URL}/blog/create`,blogData)
        console.log(response)
        const blog = response.data
        dispatch(createBlogSuccess(blog))

    } catch (error) {
        dispatch(createBlogFailure(error.message))
    }
}


const deleteBlogRequest = () => ({type:DELETE_BLOG_REQUEST})
const deleteBlogSuccess = (blog) => ({type:DELETE_BLOG_SUCCESS,payload:blog})
const deleteBlogFailure = (error) => ({type:DELETE_BLOG_FAILURE,payload:error})

export const deleteBlog = (id) => async (dispatch)=>{

    dispatch(deleteBlogRequest())
    try {
        const response = await api.get(`${API_BASE_URL}/blog/${id}/delete`)
        const blog = response.data
        dispatch(deleteBlogSuccess(blog))
    } catch (error) {
        dispatch(deleteBlogFailure(error.message))
    }

}