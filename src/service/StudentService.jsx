
import axios from "axios";

const REST_API_BASE_URL="http://localhost:8080/students";


export const listStudents=()=> axios.get(REST_API_BASE_URL);

export const createStudent=(student)=>axios.post(REST_API_BASE_URL,student);

export const getStudent=(studentId)=>axios.get(REST_API_BASE_URL + '/' +studentId);

export const updateStudent=(id,student)=>axios.put(REST_API_BASE_URL + '/' +id,student);

export const deletStudent=(id)=>axios.delete(REST_API_BASE_URL+ '/' +id)



  