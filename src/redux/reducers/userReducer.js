
import { ActionTypes } from "../constants/actionTypes";


const initialState = {
    users: [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        }
    ],
};


export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USERS:
            return  { ...state, users: payload };
        default:
            return state;
    }
}

export const selectedUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_USER:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_USER:
            return {};
        default:
            return state;
    }
}
