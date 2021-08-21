import {createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCity = createAsyncThunk('city/fetchCity',async ()=>{
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/City/getAll`)
	return res.data
})