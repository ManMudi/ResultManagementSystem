import axios from "axios"


const REST_API_BASE_URL='http://localhost:8080/levels'

export const listLevels=()=>axios.get(REST_API_BASE_URL);

export const createLevel=(level)=>axios.post(REST_API_BASE_URL,level);

export const getLevel=(id)=>axios.get(REST_API_BASE_URL+'/'+id);

export const updateLevel=(id,level)=>axios.put(REST_API_BASE_URL+'/'+id,level);

export const deleteLevel=(id)=>axios.delete(REST_API_BASE_URL+'/'+id);



