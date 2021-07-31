import { jobPostingsPageFilterLenght } from "../../initialValues/jobPostings";
import { GET_JOB_BYPAGE_FILTER_LENGHT } from "../../actions/jobPostingsActions";


const initialState = {
  jobPostingsPageFilterLenght: jobPostingsPageFilterLenght,
  };
  

  export default function jobPostingsPageFilterLenghtReducer(
    state = initialState,
    { payload, type }
  ) {
    switch (type) {
      case GET_JOB_BYPAGE_FILTER_LENGHT:
        return { ...payload, jobPostingsPageFilterLenght: payload };
      default:
        return state;
    }
  }
  