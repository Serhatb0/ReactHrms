import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { fetchEducation,addEducationAsync,updateEducationAsync,deleteEducationAsync } from "./services";

export const educationAdaptor = createEntityAdapter();
export const educationSelector = educationAdaptor.getSelectors(
	(state) => state.education
  );

const initialState= educationAdaptor.getInitialState({
	status : 'idle',
})
  

export const educationsSlice = createSlice({
	name:'education',
	initialState,
	reducers:{},
	extraReducers:{
		[fetchEducation.pending]:(state) =>{
			state.status = 'loading';
		},
		[fetchEducation.fulfilled]:(state,action)=>{
			educationAdaptor.setAll(state,action.payload.data);
			state.status ='succeeded'
		},
		[fetchEducation.rejected]:(state,action) => {
			state.error = action.error.message;
		},
		// Add Educations
		
		[addEducationAsync.fulfilled]:(state,action) =>{
			educationAdaptor.addOne(state, action.payload.data)
		
		},

		//Update Educations

		[updateEducationAsync.fulfilled]:(state,action)=>{
			educationAdaptor.updateOne(state,{
				id:action.payload.data.id,
				changes: action.payload.data
			})
		},
		// Delete Education

		[deleteEducationAsync.fulfilled]:(state ,action) =>{
			const id = action.payload.data.id;
			educationAdaptor.removeOne(state,id)
		}
		
		 

	}
})

export default educationsSlice.reducer;