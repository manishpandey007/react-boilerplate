import {combineReducers} from 'redux'
import user from "./user/reducer";

export default reducers => combineReducers({
    user,
});
