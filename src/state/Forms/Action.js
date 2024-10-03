import { api, API_BASE_URL } from "../../config/apiConfig";
import { APPLICATION_FORM_FAILURE, APPLICATION_FORM_REQUEST, APPLICATION_FORM_SUCCESS, INQUIRY_FORM_FAILURE, INQUIRY_FORM_REQUEST, INQUIRY_FORM_SUCCESS } from "./ActionType";

const applicationFormRequest = () => ({type:APPLICATION_FORM_REQUEST})
const applicationFormSuccess = (form) => ({type:APPLICATION_FORM_SUCCESS,payload:form})
const applicationFormFailure = (error) => ({type:APPLICATION_FORM_FAILURE,payload:error})

export const applicationForm= (data)=> async(dispatch)=>{
    dispatch(applicationFormRequest())
    try {
        const response = await api.post(`${API_BASE_URL}/application/create`,data)
        dispatch(applicationFormSuccess(response.data))
    } catch (error) {
        dispatch(applicationFormFailure(error))
    }
}

const inquiryFormRequest = () => ({type:INQUIRY_FORM_REQUEST})
const inquiryFormSuccess = (form) => ({type:INQUIRY_FORM_SUCCESS,payload:form})
const inquiryFromFailure = (error) => ({type:INQUIRY_FORM_FAILURE,payload:error})

export const inquiryForm = (data) => async(dispatch)=>{
    dispatch(inquiryFormRequest())
    try {
        console.log(data)
        const response = await api.post(`${API_BASE_URL}/inquiry/create`,data)
        dispatch(inquiryFormSuccess(response.data))
    } catch (error) {
        dispatch(inquiryFromFailure(error))
    }
}