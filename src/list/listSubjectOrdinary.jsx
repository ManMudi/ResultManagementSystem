
import { useEffect, useState } from 'react';
import { deleteSubjectOrdinary, listSubjectOrdinary } from '../service/subjectOrdinaryService';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/userService';


const SubjectOrdinary = () => {

    const[subjects,setSubjects]=useState([])

    useEffect(()=>{
      fetchSubjectOrdinary();
    })

    const fetchSubjectOrdinary=async()=>{
      try {
    
          const token = localStorage.getItem('token'); // Retrieve the token from localStorage
          const response = await UserService.getAllSubjectOrdinary(token)
         // console.log(response);
          setSubjects(response); // Assuming the list of users is under the key 'ourUsersList'
        } catch (error) {
          console.error('Error fetching users:', error);
        }
    }

    const navigator=useNavigate('/add-subject')

    const subject=()=>{
    navigator('/add-subject')
    }

    const handleEdit=(id)=>{
      navigator(`/edit-subject/${id}`)
    }
            
 const  handleDelete=async(subjectId)=>{
  try {
      // Prompt for confirmation before deleting the user
      const confirmDelete = window.confirm('Are you sure you want to delete this subject?');

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      if (confirmDelete) {
        await UserService.deleteSubjectOrdinary(subjectId, token);
        // After deleting the user, fetch the updated list of users
        fetchSubjectOrdinary();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
}


    return (
        <Container  >
          <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
       <div className='container'>
        <h2 className='text-center'>List of Subject</h2>
        <button className='btn btn-primary mb-2' onClick={subject}>Add Subject</button>
        <table className='table table-striped-column table-bordered table-hover table-sm '> 
          <thead className='table-dark' align='center'>
            <tr>
              <th >Subject Code</th>
              <th>Subject Name</th>
              <th>Subject Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody align='center'>
           {
            subjects.map(subject=>
              <tr key={subject.id}>
               <td>{subject.id}</td>
               <td align='left'>{subject.subject}</td>
               <td align='left'>{subject.description}</td>
               <td align='center'><button className='btn btn-info btn-sm' onClick={()=>handleEdit(subject.id)}>Update</button>
               <button className='btn btn-warning btn-sm' style={{marginLeft:'5px'}} onClick={()=>handleDelete(subject.id)}>Delete</button>
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

export default SubjectOrdinary;