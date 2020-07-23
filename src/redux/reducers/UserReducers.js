import {GET_USER_PENDING, LOGOUT, SIGN_UP_REJECT, SIGNUP_SUCCESS} from "../actions/UserActions";

const INITIAL_STATE = {
    user: {},
    isLoading: false,
    logged: false,
    token: '',
};

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case GET_USER_PENDING:
            return {
                ...state,
                isLoading: true,

            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user : action.user,
                token : action.token,
                logged : true
            };
        case SIGN_UP_REJECT:
            return {
                ...state,
                isLoading: false,
            };
        case LOGOUT:
            return {
                ...state,
                user : {},
                token : "action.token",
                logged : false
            }
        default:
            return state;
    }
};
