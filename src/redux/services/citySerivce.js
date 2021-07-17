import http from "./htttpCommon/httpCommon";


export default class CityService{
    getCities(){
        return http.get("/City/getAll")
    }
}