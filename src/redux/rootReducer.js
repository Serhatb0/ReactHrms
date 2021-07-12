import { combineReducers } from "redux";
import jobPostingsPageReducer from "./reducers/jobPostingsPageReducer";
import jobPostingsReducer from "./reducers/jobPostingsReducer";
const rootReducer = combineReducers({
    job:jobPostingsReducer,
    jobPostingspage:jobPostingsPageReducer
})

export default rootReducer;