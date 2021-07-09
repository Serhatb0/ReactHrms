import axios from "axios";


export default class EmployerService{
    getEmployer(employerId){
        return axios.get(`http://localhost:8080/api/Employers/findById?employerId=${employerId}`)
    }

    employerUpdate(companyName,email,webAddress,employerId){
        return axios.post(`http://localhost:8080/api/Employers/updateEmployer?companyName=${companyName}&email=${email}&id=${employerId}&webAddress=${webAddress}`)
    }
}