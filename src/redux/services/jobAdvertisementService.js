import http from "./htttpCommon/httpCommon";

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return http.get("/JobPostings/getall");
    }

    getAllByjobPostingsId(jobPostingsId){
        return http.get("/JobPostings/getAllByjobPostingsId?jobPostingsId=" + jobPostingsId)
    }

    getAllByPage(pageNo ,pageSize){
        return http.get("/JobPostings/getallPage?pageNo=" +pageNo +"&pageSize="+pageSize)
    }

    getAllByPageFilter(max,min,pageNo,pageSize,filterOption,){
        return http.post(`/JobPostings/getByActiveAndFilter?max=${max}&min=${min}&pageNo=${pageNo}&pageSize=${pageSize}`,filterOption)
    }

    getAllByPageIsActive(pageNo,pageSize,isActive){
        return http.get(`/JobPostings/getAllByisActive?isActive=${isActive}&pageNo=${pageNo}&pageSize=${pageSize}`)
    }

    getAllByPageIsNull(pageNo,pageSize){
        return http.get(`/JobPostings/getAllByNull?pageNo=${pageNo}&pageSize=${pageSize}`)
    }

    
}


