import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer.ts";
import profileReducer from "./profileReducer.ts";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer.ts";
import authReducer from "./authReducer.ts";
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store