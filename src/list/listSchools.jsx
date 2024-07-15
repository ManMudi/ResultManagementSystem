
import React, { useEffect, useState } from 'react';
import { deletSchool, listSchools } from '../service/SchoolService';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/userService';

const School = () => {

    const[schools,setSchools]=useState([]);

    const navigator=useNavigate('/add-school')

    const school=()=>{
      navigator('/add-school')
    }

 useEffect(()=>{
    fetchSchool();
 },[])

 const fetchSchool=async()=>{
  try {

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await UserService.getAllSchool(token)
      //console.log(response);
      setSchools(response); // Assuming the list of users is under the key 'ourUsersList'
    } catch (error) {
      console.error('Error fetching users:', error);
    }
}

   const handleUpdate=(id)=>{
     navigator(`/edit-school/${id}`)
   }
   const  handleDelete=async(schoolId)=>{
    try {
        // Prompt for confirmation before deleting the user
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
  
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        if (confirmDelete) {
          await UserService.deleteSchool(schoolId, token);
          // After deleting the user, fetch the updated list of users
          fetchSchool();
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
  }

    return (
        <Container  >
          <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
       <div className='container'>
        <h2 className='text-center'>List of School</h2>
        <button className='btn btn-primary mb-2'  onClick={school}>Add School</button>
        <table className='table table-striped-column table-bordered table-hover table-sm '> 
          <thead className='table-dark' align='center'>
            <tr>
              <th >School Id</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody align='center'>
           {
            schools.map(school=>
              <tr key={school.id}>
               <td>{school.id}</td>
               <td align='left'>{school.name}</td>
               <td align='left'>{school.address}</td>
               <td align='left'>{school.email}</td>
               <td>{school.phone}</td>
               <td align='center'><button className='btn btn-info btn-sm' onClick={()=>handleUpdate(school.id)}>Update</button>
               <button className='btn btn-warning btn-sm' style={{marginLeft:'5px'}} onClick={()=>handleDelete(school.id)}>Delete</button>
               </td>
              </tr>
            )
           }
          </tbody>
        </table>
       </div>
       </div>
      </Container>
    );
};

export default School;