import { REGISTER, REGISTER_ERROR } from "./registerTypes";



const initialState = {
    user: [],
    loading: true,
}


export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case REGISTER_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default: return state;
    }
}