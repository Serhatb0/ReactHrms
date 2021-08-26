import {createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchEmployerById = createAsyncThunk('employer/fetchEmployerById',async (employerId)=>{
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/Employers/findById?employerId=${employerId}`)
	return res.data
})


export const updateEmployerAsync = createAsyncThunk('employer/updateEmployerAsync',async (data)=>{
	const res = await axios.put(`${process.env.REACT_APP_API_BASE_ENDPOINT}/Employers/update?id=${data.id}`,data.values)
	return res.data
})

export const fetchEmployer = createAsyncThunk('employer/fetchEmployer',async ()=>{
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/Employers/getall`)
	return res.data
})

export const employerStatusChangeAsync = createAsyncThunk('employer/employerStatusChangeAsync',async (data)=>{
	const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/EmployeeConfirmsEmployer/employerStatusChange?employeeId=${data.employeeId}&employerId=${data.employerId}&isConfirmed=${data.employerStatus}`)
	return res.data
})