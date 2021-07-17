import { combineReducers } from "redux";
import  jobPostingsPageFilterReducer  from "./reducers/jobPostingsPageFilterReducer";
import jobPostingsPageReducer from "./reducers/jobPostingsPageReducer";
import jobPostingsReducer from "./reducers/jobPostingsReducer";
import jobPostingsPageFilterLenghtReducer from "./reducers/jobPostingsPageFilterLenghtReducer";
import cityReducer from "./reducers/cityReducer";
import jobPositionsReducer from "./reducers/jobPositionsReducer";


const rootReducer = combineReducers({
    job:jobPostingsReducer,
    jobPostingspage:jobPostingsPageReducer,
    jobPostingspageFilter:jobPostingsPageFilterReducer,
    jobPostingsPageFilterLenght:jobPostingsPageFilterLenghtReducer,
    city:cityReducer,
    jobPositions:jobPositionsReducer

})

export default rootReducer;