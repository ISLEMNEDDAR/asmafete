import {combineReducers} from 'redux';
import UserReducers from "./reducers/UserReducers";
import FetesReducers from "./reducers/MesFetesReducer";


export default combineReducers({
    user: UserReducers,
    fetes : FetesReducers
});