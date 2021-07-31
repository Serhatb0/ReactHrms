import EducationService from "../services/educationService";

const educationService = new EducationService();

export const GET_EDUCATİONS_CANDİDATEID_SUCCESS =
  "GET_EDUCATİONS_CANDİDATEID_SUCCESS";

export const GET_EDUCATİONS_ID_SUCCESS ="GET_EDUCATİONS_ID_SUCCESS"

export function getEducationsSuccess(educations) {
  return { type: GET_EDUCATİONS_CANDİDATEID_SUCCESS, payload: educations };
}

export function getEducations(id) {
  return function (dispatch) {
    return educationService
      .getAllByCandidateId(id)
      .then((result) => dispatch(getEducationsSuccess(result.data.data)));
  };
}

export function getEducationsIdSuccess(educationsId) {
    return { type: GET_EDUCATİONS_ID_SUCCESS, payload: educationsId };
  }

export function getEducationsId(id) {
  
  return function (dispatch) {
    return educationService
      .getAllById(id)
      .then((result) => dispatch(getEducationsIdSuccess(result.data.data)));
  };
}
