import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchJobPostings,fetchAllJobPostings ,JobPostingsStatusChangeAsync,addJobPostingAsync} from "./services";

export const jobPostingAdaptor = createEntityAdapter();

export const jobPostingSelector = jobPostingAdaptor.getSelectors(
  (state) => state.jobPostings
);

export const jobPostingsSlice = createSlice({
  name: "jobPostings",
  initialState: jobPostingAdaptor.getInitialState({
    status: "idle",
    total: "",
  }),
  reducers: {
    setAllJobPostings: jobPostingAdaptor.setAll,
    statusChange: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: {
    // add JobPositn

    [addJobPostingAsync.fulfilled]:(state,action)=>{
      jobPostingAdaptor.addOne(state,action.payload.data)
    },
    // Job Postings Status Change
    [JobPostingsStatusChangeAsync.fulfilled]:(state)=>{
      state.status = 'idle';
    },

    // Null JobPostings
    [fetchAllJobPostings.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchAllJobPostings.fulfilled]: (state, action) => {
      jobPostingAdaptor.setAll(state, action.payload.data);
      state.status = "succeeded";
      state.total = action.payload.message;
    },
    [fetchAllJobPostings.rejected]: (state, action) => {
      state.error = action.error.message;
    },

    // Get Filter All

    [fetchJobPostings.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchJobPostings.fulfilled]: (state, action) => {
      jobPostingAdaptor.setAll(state, action.payload.data);
      state.status = "succeeded";
      state.total = action.payload.message;
    },
    [fetchJobPostings.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const { statusChange } = jobPostingsSlice.actions;
export default jobPostingsSlice.reducer;
