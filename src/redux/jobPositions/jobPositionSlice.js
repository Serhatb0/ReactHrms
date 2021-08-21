import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { fetchJobPosition } from "./services";

export const jobPositionAdaptor = createEntityAdapter();
export const jobPositionSelector = jobPositionAdaptor.getSelectors(
	(state) => state.jobPosition
  );



const initialState =jobPositionAdaptor.getInitialState({
	status : 'idle',
})

export const jobPosition = createSlice({
	name:'jobPosition',
	initialState,
	reducers:{},
	extraReducers:{
		[fetchJobPosition.pending]:(state) =>{
			state.status = 'loading';
		},
		[fetchJobPosition.fulfilled]:(state,action)=>{
			jobPositionAdaptor.setAll(state,action.payload.data);
			state.status ='succeeded'
		},
		[fetchJobPosition.rejected]:(state,action) => {
			state.error = action.error.message;
		}
	}
})

export default jobPosition.reducer;