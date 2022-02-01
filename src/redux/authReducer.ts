import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'

export type InitialState = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState:InitialState = {    // начальный, дефолтный state
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: any): InitialState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        default:
            return state
    }
}
type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
}


type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null): SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {
        userId,
        email,
        login
    }})

export const getAuthUserData = () => async (dispatch: any) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login))
    }

}

export default authReducer