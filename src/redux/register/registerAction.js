import { 
    REGISTER,
    REGISTER_ERROR
} from "./registerTypes";
import instance from "../../api/axios";



export const register = (data) => async dispatch => {
    try {
        const res = await instance.post('register', data)
        dispatch({
            type: REGISTER,
            payload: res.data
        })
    }
    catch(e) {
        console.log(e);
        dispatch({
            type:REGISTER_ERROR,
            payload:e.response.data
        })
    }
}

