import axios from "axios";


const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    baseUrl: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: { 'API-KEY': 'bb0cb20a-6c00-42ea-96fb-f598fa987298' },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 2) {
        return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(baseUrl + `follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(baseUrl + `follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(baseUrl + `profile/` + userId);
    }


}

export const authAPI = {
    me() {
        return instance.get(baseUrl + `auth/me`);
    }


}

