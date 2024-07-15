import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { useNavigate} from "react-router-dom";
import UserService from "../service/userService";

const ListUsers = () => {

    const navigator=useNavigate();

    const[myUsers,setMyUsers]=useState([]);

    const  handleDelete=async(userId)=>{
        try {
            // Prompt for confirmation before deleting the user
            const confirmDelete = window.confirm('Are you sure you want to delete this user?');
      
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            if (confirmDelete) {
              await UserService.deleteUser(userId, token);
              // After deleting the user, fetch the updated list of users
              fetchUsers();
            }
          } catch (error) {
            console.error('Error deleting user:', error);
          }
    }

    const data='ADMIN';

    const handleEdit=(id)=>{
     navigator(`/edit-user/${id}`, { state: data })
     console.log(id)
    }

    useEffect(()=>{
     fetchUsers();
    },[])

const fetchUsers=async()=>{
    try {

        const token = localStorage.getItem('token'); // Retrieve the token from localStorage
        const response = await UserService.getAllUsers(token);
        //   console.log(response);
        setMyUsers(response.ourUsersList); // Assuming the list of users is under the key 'ourUsersList'
      } catch (error) {
        console.error('Error fetching users:', error);
      }
}

    const handleRoute=()=>{
     navigator("/register",{ state: data })
    }
   
    return (
        <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
      <Container  >
       <div className='container'>
        <h2 className='text-center'>List of Users</h2>
        <button className='btn btn-primary mb-2' onClick={handleRoute}>Add User</button>
        <table className='table table-striped-column table-bordered table-hover table-sm '> 
          <thead className='table-dark' align='center'>
            <tr>
              <th>Name</th>
              <th >Email</th>
              <th>City</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody align='center'>
          {myUsers.map(myUser => (
            <tr key={myUser.id}>
              <td>{myUser.name}</td>
              <td>{myUser.email}</td>
              <td>{myUser.city}</td>
              <td>{myUser.role}</td>
              <td align='center'><button className='btn btn-info btn-sm' onClick={()=>handleEdit(myUser.id)}>Update</button>
               <button className='btn btn-warning btn-sm' style={{marginLeft:'5px'}} onClick={()=>handleDelete(myUser.id)}>Delete</button>
               </td>
            </tr>
          ))}
    
          </tbody>
        </table>
       </div>
      </Container>
      </div>
    );
};

export default ListUsers;