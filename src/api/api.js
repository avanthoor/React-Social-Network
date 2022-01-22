import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4f721232-cdd1-4717-867c-6e9a76d21813'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }
}





