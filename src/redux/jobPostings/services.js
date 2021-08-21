import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchJobPostings = createAsyncThunk('jobPostings/fetchJobPostings',async (data)=>{
	const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/JobPostings/getByActiveAndFilter?max=${data.max}&min=${data.min}&pageNo=${data.activePage}&pageSize=${data.pageSize}`,data.filter);
	return res.data
})


