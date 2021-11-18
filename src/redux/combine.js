import { combineReducers } from "@reduxjs/toolkit";
import { registerReducer } from "./register/registerReducer";


const rootReducer = combineReducers({
    register:registerReducer,
})

export default rootReducer;