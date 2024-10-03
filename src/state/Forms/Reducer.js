import { APPLICATION_FORM_FAILURE, APPLICATION_FORM_REQUEST, APPLICATION_FORM_SUCCESS, INQUIRY_FORM_FAILURE, INQUIRY_FORM_REQUEST, INQUIRY_FORM_SUCCESS } from "./ActionType"

const initState = {
    isLoading:null,
    error:null,
    formData:null
}

export const formReducer = (state=initState,action)=>{

    switch (action.type){
        
        case APPLICATION_FORM_REQUEST:
        case INQUIRY_FORM_REQUEST:
            return {...state,isLoading:true,error:null}

        case APPLICATION_FORM_SUCCESS:
        case INQUIRY_FORM_SUCCESS:
            return {...state,isLoading:false,formData:action.payload,error:null}

        case APPLICATION_FORM_FAILURE:
        case INQUIRY_FORM_FAILURE:
            return {...state,isLoading:false,error:action.payload,}

        default:
            return state
    }
}