import axios from "axios";

export default class RegisterEmployerService{
    postRegisterEmployer(employer){
       return axios.post("http://localhost:8080/api/Employers/addRegister",employer)
    }
}
