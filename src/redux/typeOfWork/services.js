import {createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTypeOfWork = createAsyncThunk('typeOfWork/fetchTypeOfWork',async ()=>{

	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/TypesOfWorks/getAll`)
	return res.data
})