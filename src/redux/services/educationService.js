import http from "./htttpCommon/httpCommon";

export default class EducationService{
    getAllByCandidateId(id){
        return http.get(`/Educations/getAllBycandidateId?id=${id}`)
    }

    

    
    
  

    DeleteEducation(id){
        return http.delete(`/Educations/educationDelete?id=${id}`)
    }
}