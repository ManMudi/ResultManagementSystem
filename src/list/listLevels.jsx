import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import UserService from "../service/userService";

const Levels = () => {

  const[levels,setLevels]=useState([])

  const navigator=useNavigate();

  const handleLevel=()=>{
  navigator('/add-class')
  }
   
  const handleUpdate=(id)=>{
    navigator(`/edit-class/${id}`)
    console.log(id)
  }


  useEffect(()=>{
     fetchClass();
  },[])
      
  const fetchClass=async()=>{
    try {
  
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const response = await UserService.getAllClass(token)
       // console.log(response);
        setLevels(response); // Assuming the list of users is under the key 'ourUsersList'
      } catch (error) {
        console.error('Error fetching users:', error);
      }
  }
  const  handleDelete=async(levelId)=>{
    try {
        // Prompt for confirmation before deleting the user
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
  
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        if (confirmDelete) {
          await UserService.deleteLevel(levelId, token);
          // After deleting the user, fetch the updated list of users
          fetchClass();
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
}

  return (
    <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
      <Container  >
       <div className='container'>
        <h2 className='text-center'>List of Class</h2>
        <button className='btn btn-primary mb-2' onClick={handleLevel}>Add Class</button>
        <table className='table table-striped-column table-bordered table-hover table-sm '> 
          <thead className='table-dark' align='center'>
            <tr>
              <th >Class Id</th>
              <th>Class Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody align='center'>
           {
            levels.map(level=>
              <tr key={level.id}>
               <td>{level.id}</td>
               <td>{level.levelName}</td>
               <td align='center'><button className='btn btn-info btn-sm' onClick={()=>handleUpdate(level.id)}>Update</button>
               <button className='btn btn-warning btn-sm' style={{marginLeft:'5px'}} onClick={()=>handleDelete(level.id)}>Delete</button>
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

export default Levels;