import {thunk} from 'redux-thunk'
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from './Auth/Reducer';
import { blogsReducer } from './Blog/Reducer';


const rootReducers = combineReducers({
        auth:authReducer,
        blog:blogsReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))