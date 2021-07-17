import http from "./htttpCommon/httpCommon";

export default class JobPositionsService{

    getJobPositions(){
        return http.get("/jobPositions/getall")
    }
    
}