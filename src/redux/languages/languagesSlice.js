import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { fetchLanguage ,deleteLanguageAsync,addLanguageAsync,updateLanguageAsync} from "./services";

export const languageAdaptor = createEntityAdapter();
export const languageSelector = languageAdaptor.getSelectors(
	(state) => state.language
  );



const initialState =languageAdaptor.getInitialState({
	status : 'idle',
})

export const languageSlice = createSlice({
	name:'language',
	initialState,
	reducers:{},
	extraReducers:{
		// Get
		[fetchLanguage.pending]:(state) =>{
			state.status = 'loading';
		},
		[fetchLanguage.fulfilled]:(state,action)=>{
			languageAdaptor.setAll(state,action.payload.data);
			state.status ='succeeded'
		},
		[fetchLanguage.rejected]:(state,action) => {
			state.error = action.error.message;
		},
		//Delete
		[deleteLanguageAsync.fulfilled]:(state,action) =>{
			const id = action.payload.data.id
			languageAdaptor.removeOne(state,id)
		},

		// Add

		[addLanguageAsync.fulfilled]:(state,action)=>{
			languageAdaptor.addOne(state,action.payload.data);
		},

		// Updata

		[updateLanguageAsync.fulfilled]:(state,action)=>{
			languageAdaptor.updateOne(state,{
				id:action.payload.data.id,
				changes: action.payload.data
			})
		}

	}
})

export default languageSlice.reducer;