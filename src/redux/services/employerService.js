import http from "./htttpCommon/httpCommon";

export default class EmployerService{
    getEmployer(employerId){
        return http.get(`/Employers/findById?employerId=${employerId}`)
    }

    employerUpdate(companyName,email,webAddress,employerId){
        return http.post(`/Employers/updateEmployer?companyName=${companyName}&email=${email}&id=${employerId}&webAddress=${webAddress}`)
    }
}