import { jobPostingsPage } from "../initialValues/jobPostings";
import { GET_JOB_BYPAGE } from "../actions/jobPostingsActions";

const initialState = {
  jobPostingsPage: jobPostingsPage,
};

export default function jobPostingsPageReducer(
  state = initialState,
  { payload, type }
) {
  switch (type) {
    case GET_JOB_BYPAGE:
      return { ...payload, jobPostingsPage: payload };

    default:
      return state;
  }
}
