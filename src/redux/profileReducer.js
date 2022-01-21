const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {    // начальный, дефолтный state
    posts: [
        {id: 1, message: 'Всем привет!', likes: 1},
        {id: 2, message: 'Как жизнь молодая?', likes: 2},
        {id: 3, message: 'Пытаюсь вкатиться в Реакт', likes: 3},
        {id: 4, message: 'Пока выходит говнокод, но я стараюсь', likes: 4},
        {id: 5, message: 'Ещё одно сообщение', likes: 5},
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [{id: state.posts.length + 1, message: state.newPostText, likes: 0}, ...state.posts]
            }

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const updatePostText = (text) => ({type: UPDATE_POST_TEXT, postText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export default profileReducer