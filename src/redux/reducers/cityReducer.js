import { cities } from "../initialValues/city";
import { GET_CİTİES_SUCCESS } from "../actions/cityActions";

const initialState = {
  cities: cities,
};

export default function cityReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CİTİES_SUCCESS:
      return { ...payload, cities: payload };

    default:
      return state;
  }
}
