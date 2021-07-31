import JobAdvertisementService from "../services/jobAdvertisementService";

let jobAdvertisementService = new JobAdvertisementService();
export const GETALLBYISACTİVE_JOB_SUCCESS = "GETALLBYISACTİVE_JOB_SUCCESS";
export const GETALLBYACTİVE_JOBNULL_SUCCESS = "GETALLBYACTİVE_JOBNULL_SUCCESS";



export function getAllByPageIsActiveSuccess(getAllByPageIsActive){
    return {type:GETALLBYISACTİVE_JOB_SUCCESS,payload:getAllByPageIsActive}
}



export function getAllByPageIsActive(pageNo,pageSize,isActive){
    return function(dispatch){
        return jobAdvertisementService.getAllByPageIsActive(pageNo,pageSize,isActive)
        .then(result=> dispatch(getAllByPageIsActiveSuccess(result.data.data)))

        
    }
}

export function getAllByPageIsNullSuccess(getAllByPageIsNull){
    return {type:GETALLBYACTİVE_JOBNULL_SUCCESS ,payload:getAllByPageIsNull}
}


export function getAllByPageIsNull(pageNo,pageSize){
    return function(dispatch){
        return jobAdvertisementService.getAllByPageIsNull(pageNo,pageSize)
        .then(result => dispatch(getAllByPageIsNullSuccess(result.data.data)))
    }
}