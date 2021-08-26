import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { fetchTypeOfWork } from "./services";

export const typeOfWorkAdaptor = createEntityAdapter();
export const typeOfWorkSelector = typeOfWorkAdaptor.getSelectors(
	(state) => state.typeOfWork
  );



const initialState =typeOfWorkAdaptor.getInitialState({
	status : 'idle',
})

export const typeOfWorkSlice = createSlice({
	name:'typeOfWork',
	initialState,
	reducers:{},
	extraReducers:{
		[fetchTypeOfWork.pending]:(state) =>{
			state.status = 'loading';
		},
		[fetchTypeOfWork.fulfilled]:(state,action)=>{
			typeOfWorkAdaptor.setAll(state,action.payload.data);
			state.status ='succeeded'
		},
		[fetchTypeOfWork.rejected]:(state,action) => {
			state.error = action.error.message;
		}
	}
})

export default typeOfWorkSlice.reducer;