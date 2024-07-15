import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/userService';


const MyLink = () => {

 const [students,setStudents]=useState([])

 const navigator=useNavigate();

 useEffect(()=>{
   fetchStudents();
 },[])

 const fetchStudents=async()=>{
  try {

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await UserService.getAllStudents(token)
      //   console.log(response);
      setStudents(response); // Assuming the list of users is under the key 'ourUsersList'
    } catch (error) {
      console.error('Error fetching users:', error);
    }
}

 const Student=()=>{
  navigator('/add-student')
 }

 const handleUpdate=(id)=>{
  navigator(`/edit-student/${id}`)
 }

 const  handleDelete=async(studentId)=>{
  try {
      // Prompt for confirmation before deleting the user
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      if (confirmDelete) {
        await UserService.deleteStudent(studentId, token);
        // After deleting the user, fetch the updated list of users
        fetchStudents();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
}


    return (
      <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
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
      </div>
    );
};

export default MyLink; 