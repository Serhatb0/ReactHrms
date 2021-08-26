import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobPostings = createAsyncThunk(
  "jobPostings/fetchJobPostings",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/JobPostings/getByActiveAndFilter?max=${data.max}&min=${data.min}&pageNo=${data.activePage}&pageSize=${data.pageSize}`,
      data.filter
    );
    return res.data;
  }
);

export const fetchAllJobPostings = createAsyncThunk(
  "jobPostings/fetchAllJobPostings",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/JobPostings/getall`
    );
    return res.data;
  }
);

export const JobPostingsStatusChangeAsync = createAsyncThunk(
  "jobPostings/JobPostingsStatusChangeAsync",
  async (data) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/EmployeeConfirmJobPosting/JobPostingStatusChange?employeeId=${data.employerID}&isConfirmed=${data.jobStatus}&jobPostingsId=${data.id}`
    );
    return res.data;
  }
);

export const addJobPostingAsync = createAsyncThunk(
  "jobPostings/addJobPostingAsync",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/JobPostings/add`,data
    );
    return res.data;
  }
);
