import { educations  } from "../../initialValues/educations";
import { GET_EDUCATİONS_CANDİDATEID_SUCCESS } from "../../actions/educationsActions";

const initialState = {
    educations:educations
}


export default function educationsReducer(state= initialState, {type,payload}){
    switch (type) {
        case GET_EDUCATİONS_CANDİDATEID_SUCCESS:
            return {...payload,educations:payload}
    
        default:
            return state
    }


}