import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchJobPostings } from "./services";

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
