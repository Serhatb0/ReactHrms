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
    
}

