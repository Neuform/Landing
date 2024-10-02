import { GET_ALL_USERS_SUCCESS } from "../Auth/ActionType"
import { CREATE_BLOG_FAILURE, CREATE_BLOG_REQUEST, CREATE_BLOG_SUCCESS, DELETE_BLOG_FAILURE, DELETE_BLOG_REQUEST, DELETE_BLOG_SUCCESS, GET_ALL_BLOGS_FAILURE, GET_ALL_BLOGS_REQUEST, GET_ALL_BLOGS_SUCCESS, GET_BLOG_BY_ID_FAILURE, GET_BLOG_BY_ID_REQUEST, GET_BLOG_BY_ID_SUCCESS, GET_USER_BLOGS_FAILURE, GET_USER_BLOGS_REQUEST, GET_USER_BLOGS_SUCCESS } from "./ActionType"

const initState = {
    isLoading:false,
    error:null,
    blogs:[],
    blog:null
}

export const blogsReducer = (state=initState,action)=>{

    switch (action.type){
        case GET_ALL_BLOGS_REQUEST:
        case GET_USER_BLOGS_REQUEST:
        case GET_BLOG_BY_ID_REQUEST:
        case CREATE_BLOG_REQUEST:
        case DELETE_BLOG_REQUEST:
            return {...state,isLoading:true,error:null}

        case GET_ALL_BLOGS_SUCCESS:
        case GET_USER_BLOGS_SUCCESS:
            return {...state,isLoading:false,error:null,blogs:action.payload}

        case GET_BLOG_BY_ID_SUCCESS:
        case CREATE_BLOG_SUCCESS:
        case DELETE_BLOG_SUCCESS:
            return{...state,isLoading:false,error:null,blog:action.payload}

        case GET_ALL_BLOGS_FAILURE:
        case GET_USER_BLOGS_FAILURE:
        case GET_BLOG_BY_ID_FAILURE:
        case CREATE_BLOG_FAILURE:
        case DELETE_BLOG_FAILURE:
            return{...state,isLoading:false,error:action.payload}

        default:
            return state
    }
}