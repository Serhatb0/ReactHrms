import { jobPositions } from "../initialValues/jobPositions";
import { GET_JOBPOSİTİONS_SUCCESS } from "../actions/jobPositionsActions";

const initialState = {
    jobPositions:jobPositions
}

export default function jobPositionsReducer(state= initialState,{type,payload} ){

    switch (type) {
        case GET_JOBPOSİTİONS_SUCCESS:
            return {...payload,jobPositions:payload}
    
        default:
            return state;
    }


}