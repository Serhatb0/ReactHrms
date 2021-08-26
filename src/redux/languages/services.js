import {createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchLanguage = createAsyncThunk('language/fetchLanguage',async (id)=>{

	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/ForeignLanguages/getallById?candidateId=${id}`)
	return res.data
})

export const deleteLanguageAsync = createAsyncThunk('language/deleteLanguageAsync',async (id)=>{
	const res = await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/ForeignLanguages/delete?id=${id}`)
	return res.data
})


export const addLanguageAsync = createAsyncThunk('language/addLanguageAsync',async (data)=>{
	const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/ForeignLanguages/add`,data)
	return res.data
})

export const updateLanguageAsync = createAsyncThunk('language/updateLanguageAsync',async (data)=>{
	const res = await axios.put(`${process.env.REACT_APP_API_BASE_ENDPOINT}/ForeignLanguages/update?id=${data.id}`,data.values)
	return res.data
})