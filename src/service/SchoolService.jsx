import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/schools'

export const listSchools=()=>axios.get(REST_API_BASE_URL);

export const createSchool=(school)=>axios.post(REST_API_BASE_URL,school);

export const getSchool=(id)=>axios.get(REST_API_BASE_URL+'/'+id);

export const updateSchool=(id,level)=>axios.put(REST_API_BASE_URL+'/'+id,level)

export const deletSchool=(id)=>axios.delete(REST_API_BASE_URL+'/'+id);

