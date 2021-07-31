import JobAdvertisementService from "../services/jobAdvertisementService";

const jobAdvertisementService = new JobAdvertisementService();

export const GET_JOB_BYPAGE_FILTER = "GET_JOB_BYPAGE_FILTER";
export const GET_JOB_BYPAGE_FILTER_LENGHT = "GET_JOB_BYPAGE_FILTER_LENGHT";
export const GET_JOB_BY_ID_SUCCESS = "GET_JOB_BY_ID_SUCCESS"
export function getJobPostingsPageFilter(JobPostingsPageFilter) {
  return { type: GET_JOB_BYPAGE_FILTER, payload: JobPostingsPageFilter };
}

export function getJobPostingsByPageFilter(
  max,
  min,
  pageNo,
  pageSize,
  filterOption
) {
  return function (dispatch) {
    return jobAdvertisementService
      .getAllByPageFilter(max, min, pageNo, pageSize, filterOption)
      .then((result) => dispatch(getJobPostingsPageFilter(result.data.data)));
  };
}

export function getJobPostingsPageFilterLenght(JobPostingsPageFilterLenght) {
  return {
    type: GET_JOB_BYPAGE_FILTER_LENGHT,
    payload: JobPostingsPageFilterLenght,
  };
}

export function getJobPostingsByPageFilterLenght(
  max,
  min,
  pageNo,
  pageSize,
  filterOption
) {
  return function (dispatch) {
    return jobAdvertisementService
      .getAllByPageFilter(max, min, pageNo, pageSize, filterOption)
      .then((result) =>
        dispatch(getJobPostingsPageFilterLenght(parseInt(result.data.message)))
      );
  };
}


export function getJobPostingsIdSuccess(jobPostingsId){
  return {
    type:GET_JOB_BY_ID_SUCCESS,
    payload:jobPostingsId
  }
}




export function getJobPostingsId(
  id
){
  return function (dispatch){
    return jobAdvertisementService.getAllByjobPostingsId(id)
    .then(result => dispatch(getJobPostingsIdSuccess(result.data.data)))
  }
}
