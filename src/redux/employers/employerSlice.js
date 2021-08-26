import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { fetchEmployerById,updateEmployerAsync ,fetchEmployer,employerStatusChangeAsync} from "./services";


export const employerAdaptor = createEntityAdapter();
export const employerSelector = employerAdaptor.getSelectors(
	(state) => state.employer
  );



const initialState =employerAdaptor.getInitialState({
	status : 'idle'
})

export const employerSlice = createSlice({
	name:'employer',
	initialState,
	reducers:{},
	extraReducers:{
		// Emloyer Stasus Change

		[employerStatusChangeAsync.fulfilled]:(state)=>{
			state.status = 'idle';
		},

		// Update Employer

		[updateEmployerAsync.fulfilled]:(state,action)=>{
			employerAdaptor.updateOne(state,{
				id:action.payload.data.id,
				changes:action.payload.data
			})
		},

		// Get All Employer

		[fetchEmployer.pending]:(state) =>{
			state.status = 'loading';
		},	
		[fetchEmployer.fulfilled]:(state,action) =>{
			employerAdaptor.setAll(state,action.payload.data);
			state.status = 'succeeded';
		},

		[fetchEmployer.rejected]:(state,action)=>{
			state.error = action.error.message
		},




		// Get All By Id Employer
		[fetchEmployerById.pending]:(state) =>{
			state.status = 'loading';
		},
		[fetchEmployerById.fulfilled]:(state,action)=>{
			employerAdaptor.setOne(state,action.payload.data)
			state.status ='succeeded'
		},
		[fetchEmployerById.rejected]:(state,action) => {
			state.error = action.error.message;
		}
	}
})

export default employerSlice.reducer;