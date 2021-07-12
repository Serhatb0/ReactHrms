import http from "./htttpCommon/httpCommon";


export default class RegisterEmployerService{
    postRegisterEmployer(employer){
       return http.post("/Employers/addRegister",employer)
    }
}
