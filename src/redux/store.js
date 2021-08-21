import { configureStore } from "@reduxjs/toolkit";

import jobPostingsSlice from "./jobPostings/jobPostingsSlice";
import citySlice from "./Cities/citySlice";
import jobPositionSlice from "./jobPositions/jobPositionSlice";
import educationsSlice from "./educations/educationsSlice";




export const store = configureStore({
	reducer:{
		jobPostings:jobPostingsSlice,
		city:citySlice,
		jobPosition:jobPositionSlice,
		education:educationsSlice
	}
})