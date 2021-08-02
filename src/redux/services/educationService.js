import http from "./htttpCommon/httpCommon";

export default class EducationService{
    getAllByCandidateId(id){
        return http.get(`/Educations/getAllBycandidateId?id=${id}`)
    }

    getAllById(id){
        return http.get(`/Educations/getAllById?id=${id}`)
    }

    updateEducation(id,values){
        return http.put(`/Educations/educationUpdate?id=${id}`,values)
    }
    
    addEducation(values){
        return http.post(`/Educations/add`,values)
    }

    DeleteEducation(id){
        return http.delete(`/Educations/educationDelete?id=${id}`)
    }
}