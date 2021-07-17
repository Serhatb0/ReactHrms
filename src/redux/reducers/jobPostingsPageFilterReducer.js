import { jobPostingsPageFilter } from "../initialValues/jobPostings";
import { GET_JOB_BYPAGE_FILTER } from "../actions/jobPostingsActions";


const initialState = {
    jobPostingsPageFilter: jobPostingsPageFilter,
  };
  

  export default function jobPostingsPageReducer(
    state = initialState,
    { payload, type }
  ) {
    switch (type) {
      case GET_JOB_BYPAGE_FILTER:
        return { ...payload, jobPostingsPageFilter: payload };
      default:
        return state;
    }
  }
  