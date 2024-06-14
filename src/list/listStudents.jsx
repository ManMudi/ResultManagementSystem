
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { deletStudent, listStudents } from '../service/StudentService';
import { useNavigate, useParams } from 'react-router-dom';


const MyLink = () => {

 const [students,setStudents]=useState([])

 const navigator=useNavigate();

 useEffect(()=>{
  listStudents().then((response)=>{
    setStudents(response.data)
  }).catch(error=>{
    console.error(error)
  })
 })

 const Student=()=>{
  navigator('/add-student')
 }

 const handleUpdate=(id)=>{
  navigator(`/edit-student/${id}`)
 }

 const handleDelete=(id)=>{
  deletStudent(id).then(response=>{

  }).catch(error=>{
    console.error(error)
  })
 }

    return (
      <Container >
       <div className='container'>
        <h2 className='text-center'>List of Students</h2>
        <button className='btn btn-primary mb-2' onClick={Student}>Add Student</button>
        <table className='table table-striped-column table-bordered table-hover table-sm '> 
          <thead className='table-dark' align='center' >
            <tr>
              <th >Student Id</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           {
            students.map(student=>
              <tr key={student.id}>
               <td align='center'>{student.id}</td>
               <td>{student.firstName}</td>
               <td>{student.middleName}</td>
               <td>{student.lastName}</td>
               <td align='center'>{student.gender}</td>
               <td align='center'>{student.dateOfBirth}</td>
               <td align='center'>{student.phoneNumber}</td>
               <td align='center'><button className='btn btn-info btn-sm' onClick={()=>handleUpdate(student.id)}>Update</button>
               <button className='btn btn-warning btn-sm' style={{marginLeft:'5px'}} onClick={()=>handleDelete(student.id)}>Delete</button>
               </td>
              </tr>
            )
           }
          </tbody>
        </table>
       </div>
      </Container>
    );
};

export default MyLink; 