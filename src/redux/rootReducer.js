import { combineReducers } from "redux";
import jobPostingsPageFilterReducer from "./reducers/JobPostingsReducer/jobPostingsPageFilterReducer";
import jobPostingsPageFilterLenghtReducer from "./reducers/JobPostingsReducer/jobPostingsPageFilterLenghtReducer";
import cityReducer from "./reducers/CityReducer/cityReducer";
import jobPositionsReducer from "./reducers/JobPostingsReducer/jobPositionsReducer";
import employeeJobPostingsReducer from "./reducers/JobPostingsReducer/employeeJobPostingsReducer";
import jobPostingsGetIdReducer from "./reducers/JobPostingsReducer/jobPostingsGetIdReducer";
import educationsReducer from "./reducers/EducationsReducer/educationsReducer";
import educationsIdReducer from "./reducers/EducationsReducer/educationsIdReducer";




const rootReducer = combineReducers({
  jobPostingspageFilter: jobPostingsPageFilterReducer,
  jobPostingsPageFilterLenght: jobPostingsPageFilterLenghtReducer,
  city: cityReducer,
  jobPositions: jobPositionsReducer,
  employeeJobPostingsIsActive: employeeJobPostingsReducer,
  jobPostingsGetId:jobPostingsGetIdReducer,
  educations:educationsReducer,
  educationsId:educationsIdReducer
});

export default rootReducer;
