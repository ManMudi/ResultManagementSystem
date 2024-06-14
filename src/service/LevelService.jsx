import axios from "axios"


const REST_API_BASE_URL='http://localhost:8080/levels'

export const listLevels=()=>axios.get(REST_API_BASE_URL);



