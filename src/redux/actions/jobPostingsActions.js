import JobAdvertisementService from "../services/jobAdvertisementService";

const jobAdvertisementService = new JobAdvertisementService();

export const GET_JOB_SUCCESS = "GET_JOB_SUCCESS";
export const GET_JOB_BYPAGE = "GET_JOB_BYPAGE";

export function getJobSuccess(jopPostings) {
  return { type: GET_JOB_SUCCESS, payload: jopPostings };
}

export function getJobPostings() {
  return function (dispatch) {
    return jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => dispatch(getJobSuccess(result.data.data)));
  };
}

export function getJobPostingsPage(JobPostingsPage) {
  return {type:GET_JOB_BYPAGE,payload:JobPostingsPage}
}

export function getJobPostingsByPage(pageNo, pageSize) {
  return function (dispatch) {
    return jobAdvertisementService
      .getAllByPage(pageNo, pageSize)
      .then((result) => dispatch(getJobPostingsPage(result.data.data)));
  };
}
