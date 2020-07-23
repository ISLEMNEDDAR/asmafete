import {GET_USER_PENDING, LOGOUT, SIGN_UP_REJECT, SIGNUP_SUCCESS} from "../actions/UserActions";

const INITIAL_STATE = {
    listFetesUser : []
};


export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case GET_USER_PENDING:
            return {
                ...state,
                isLoading: true,

            };
        default:
            return state;
    }
};
