import {combineReducers} from "redux";
import loginReducer from "./loginReducers";
import registerReducer from "./registerReducers";

export default combineReducers({
    login:loginReducer,
    register:registerReducer
})