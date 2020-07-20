import {GET_USER_PENDING} from "../actions/UserActions";

const INITIAL_STATE = {
    user: {},
    isLoading: false,
    logged: false,
    alreadyIn: false,
    signUpSucces: false,
    token: '',
};

export default (state = INITIAL_STATE, action) => {
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
