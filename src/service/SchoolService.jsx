import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/schools'

export const listSchools=()=>axios.get(REST_API_BASE_URL);