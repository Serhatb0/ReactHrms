import { employeeJobPostingsIsActive ,employeeJobPostingsIsNull} from "../../initialValues/employeeJobPostings";
import { GETALLBYISACTİVE_JOB_SUCCESS ,GETALLBYACTİVE_JOBNULL_SUCCESS} from "../../actions/employeeJobPostingsActions";

const initialState = {
  employeeJobPostingsIsActive: employeeJobPostingsIsActive,
  employeeJobPostingsIsNull:employeeJobPostingsIsNull
};

export default function employeeJobPostingsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GETALLBYISACTİVE_JOB_SUCCESS:
      return { ...state, employeeJobPostingsIsActive:payload };
    case GETALLBYACTİVE_JOBNULL_SUCCESS:
      return {...state,employeeJobPostingsIsNull:payload}
    default:
      return state;
  }
}
