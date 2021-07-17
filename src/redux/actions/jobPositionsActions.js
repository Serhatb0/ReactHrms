import  JobPositionsService  from "../services/jobPositionsService";

const jobPositionsService = new JobPositionsService();


export const GET_JOBPOSİTİONS_SUCCESS = "GET_JOBPOSİTİONS_SUCCESS"


export function getJobPositionsSuccess(jobPositions){
    return {type:GET_JOBPOSİTİONS_SUCCESS,payload:jobPositions}
}

export function getJobPositions(){
    return function(dispatch){
        return jobPositionsService.getJobPositions()
        .then(result => dispatch(getJobPositionsSuccess(result.data.data)))
    }

}