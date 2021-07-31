import http from "./htttpCommon/httpCommon";

export default class EducationService{
    getAllByCandidateId(id){
        return http.get(`/Educations/getAllBycandidateId?id=${id}`)
    }

    getAllById(id){
        return http.get(`/Educations/getAllById?id=${id}`)
    }
}