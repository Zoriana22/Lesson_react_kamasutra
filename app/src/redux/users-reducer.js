const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1, photoUrl: 'https://img.badfon.ru/wallpaper/big/6/57/melisa-kristina-devushka.jpg',
            followed: true, fullName: 'Vasilii', status: 'superMentor', location: { city: 'Warsaw', country: 'Poland' }
        },
        {
            id: 2, photoUrl: 'https://img.badfon.ru/wallpaper/big/6/57/melisa-kristina-devushka.jpg',
            followed: false, fullName: 'Pavel', status: 'citizen', location: { city: 'Rostov', country: 'Russia' }
        },
        {
            id: 3, photoUrl: 'https://img.badfon.ru/wallpaper/big/6/57/melisa-kristina-devushka.jpg',
            followed: true, fullName: 'Slava', status: 'citizen', location: { city: 'Kaliningrad', country: 'Russia' }
        },
        {
            id: 4, photoUrl: 'https://img.badfon.ru/wallpaper/big/6/57/melisa-kristina-devushka.jpg',
            followed: false, fullName: 'Anatolii', status: 'citizen', location: { city: 'Los-Angeles', country: 'USA' }
        },
    ],

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;