import { ActionTypes } from "../constants/actionTypes";


export const setUsers = (Users) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: Users,
    };
};

export const selectedUser = (User) => {
    return {
        type: ActionTypes.SELECTED_USER,
        payload: User,
    };
};

export const removeSelectedUser = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_USER,
    };
};

