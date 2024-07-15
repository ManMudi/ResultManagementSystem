import axios from "axios";

const REST_API_BASE_URL="http://localhost:8080/subjects";

export const listSubjectOrdinary=()=>axios.get(REST_API_BASE_URL);

export const createSubjectOrdinary=(subject)=>axios.post(REST_API_BASE_URL,subject);

export const getSubjectOrdinary=(id)=>axios.get(REST_API_BASE_URL+'/'+id);

export const updateSubjectOrdinary=(id,subject)=>axios.put(REST_API_BASE_URL+'/'+id,subject);

export const deleteSubjectOrdinary=(id)=>axios.delete(REST_API_BASE_URL+'/'+id);


