import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-PROFILE-STATUS'
const DELETE_POST = 'DELETE-POST'

type PostType = {
    id: number
    message: string
    likes: number
}

type InitialState = {
    posts: Array<PostType>
    newPostText: string
    profile: any
    status: string
}

let initialState: InitialState = {    // начальный, дефолтный state
    posts: [
        {id: 1, message: 'Всем привет!', likes: 1},
        {id: 2, message: 'Как жизнь молодая?', likes: 2},
        {id: 3, message: 'Пытаюсь вкатиться в Реакт', likes: 3},
        {id: 4, message: 'Пока выходит говнокод, но я стараюсь', likes: 4},
        {id: 5, message: 'Ещё одно сообщение', likes: 5},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: state.posts.length + 1, message: state.newPostText, likes: 0}]
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText
            }

        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.postNum)]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

type addPostType = {
    type: typeof ADD_POST
}

type updatePostText = {
    type: typeof UPDATE_POST_TEXT
    postText: string
}

type deletePostType = {
    type: typeof DELETE_POST
    postNum: number
}

type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: any
}

type setStatusType = {
    type: typeof SET_STATUS
    status: string | null
}

export const addPost = (): addPostType => ({type: ADD_POST})
export const updatePostText = (text: string): updatePostText => ({type: UPDATE_POST_TEXT, postText: text})
export const deletePost = (postNum: number): deletePostType => ({type: DELETE_POST, postNum})
export const setUserProfile = (profile: any): setUserProfileType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string | null): setStatusType => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)))
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(status => dispatch(setStatus(status)))
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer