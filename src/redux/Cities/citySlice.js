import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { fetchCity } from "./services";

export const cityAdaptor = createEntityAdapter();
export const citySelector = cityAdaptor.getSelectors(
	(state) => state.city
  );
  

export const citySlice = createSlice({
	name:'city',
	initialState:cityAdaptor.getInitialState({
		status : 'idle',
	}),
	reducers:{},
	extraReducers:{
		[fetchCity.pending]:(state) =>{
			state.status = 'loading';
		},
		[fetchCity.fulfilled]:(state,action)=>{
			cityAdaptor.setAll(state,action.payload.data);
			state.status ='succeeded'
		},
		[fetchCity.rejected]:(state,action) => {
			state.error = action.error.message;
		}
	}
})

export default citySlice.reducer;