import { educationsId  } from "../../initialValues/educations";
import { GET_EDUCATİONS_ID_SUCCESS } from "../../actions/educationsActions";

const initialState = {
    educationsId:educationsId
}


export default function educationsReducer(state= initialState, {type,payload}){
    switch (type) {
        case GET_EDUCATİONS_ID_SUCCESS:
            return {...payload,educationsId:payload}
    
        default:
            return state
    }


}