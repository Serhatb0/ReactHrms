import {createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchJobPosition = createAsyncThunk('jobPosition/fetchJobPosition',async ()=>{

	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/jobPositions/getall`)
	return res.data
})