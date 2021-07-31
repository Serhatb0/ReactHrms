
import { GET_JOB_BY_ID_SUCCESS } from "../../actions/jobPostingsActions";
import { jobPostingsId } from "../../initialValues/jobPostings";



const initialState = {
    jobPostingsId:jobPostingsId
  };
  

  export default function jobPostingsPageReducer(
    state = initialState,
    { payload, type }
  ) {
    switch (type) {
      case GET_JOB_BY_ID_SUCCESS:
        return {...payload,jobPostingsId:payload}
      default:
        return state;
    }
  }
  