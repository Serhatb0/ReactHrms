import {  GET_JOB_SUCCESS } from "../actions/jobPostingsActions";
import { jobPostings } from "../initialValues/jobPostings";

const initialState = {
  jobPostings: jobPostings,
};

export default function jobPostingsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_JOB_SUCCESS:
      return { ...payload, jobPostings: payload };

    default:
      return state;
  }
}
