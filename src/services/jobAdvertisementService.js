import axios from "axios";


export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/JobPostings/getall");
    }

    getAllByjobPostingsId(jobPostingsId){
        return axios.get("http://localhost:8080/api/JobPostings/getAllByjobPostingsId?jobPostingsId=" + jobPostingsId)
    }

    getAllByPage(pageNo ,pageSize){
        return axios.get("http://localhost:8080/api/JobPostings/getallPage?pageNo=" +pageNo +"&pageSize="+pageSize)
    }
    
}


