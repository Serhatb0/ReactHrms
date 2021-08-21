import {createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchEducation = createAsyncThunk('education/fetchEducation',async (id)=>{
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/Educations/getAllBycandidateId?id=${id}`)
	return res.data
})


export const addEducationAsync = createAsyncThunk('education/addEducationAsync',async (data)=>{
	const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/Educations/add`,data)
	return res.data
})

export const updateEducationAsync = createAsyncThunk('education/updateEducationAsync',async (data)=>{
	const res = await axios.put(`${process.env.REACT_APP_API_BASE_ENDPOINT}/Educations/educationUpdate?id=${data.selectedEducationId}`,data.values)
	return res.data 
})

export const deleteEducationAsync = createAsyncThunk('education/deleteEducationAsync',async (id)=>{
	const res = await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/Educations/educationDelete?id=${id}`)
	return res.data
})