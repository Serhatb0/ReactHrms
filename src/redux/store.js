import { configureStore } from "@reduxjs/toolkit";

import jobPostingsSlice from "./jobPostings/jobPostingsSlice";
import citySlice from "./Cities/citySlice";
import jobPositionSlice from "./jobPositions/jobPositionSlice";
import educationsSlice from "./educations/educationsSlice";
import languageSlice from "./languages/languagesSlice";
import typeOfWorkSlice from "./typeOfWork/typeOfWorkSlice";
import employerSlice from "./employers/employerSlice";







export const store = configureStore({
	reducer:{
		jobPostings:jobPostingsSlice,
		city:citySlice,
		jobPosition:jobPositionSlice,
		education:educationsSlice,
		language:languageSlice,
		typeOfWork:typeOfWorkSlice,
		employer:employerSlice

	}
})