import CityService from "../services/citySerivce";

const cityService = new CityService();

export const GET_CİTİES_SUCCESS="GET_CİTİES_SUCCESS"

export function getCititesSuccess(cities){
    return {type:GET_CİTİES_SUCCESS , payload:cities}
}


export function getCitites(){
 return function(dispatch){
     return cityService.getCities()
    .then(result => dispatch(getCititesSuccess(result.data.data)))
     
 }
}