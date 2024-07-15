import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import UserService from '../service/userService';
import {useNavigate, useParams,useLocation } from 'react-router-dom';

const Register = () => {

  const location = useLocation();
  const data = location.state;

  console.log(data)

    const navigator=useNavigate();
    
    const {userId}=useParams();

    const saveOrUpdateUser=async(e)=>{
     e.preventDefault();

     const myUsers={email,name,city,password,role}

    if(userId){

      try {
        const confirmUpdate = window.confirm('Are you sure you want to Update this user?');
        if (confirmUpdate) {
          const token = localStorage.getItem('token');


           await UserService.updateUser(userId, myUsers, token);
           data==='ADMIN'? (navigator('/accounts')) : (navigator('/profile-Page'))
          
          // Redirect to profile page or display a success message
          setCity("");setEmail("");setPassword("");setRole("");setName("");
         
        }
  
      } catch (error) {
        console.error('Error updating user profile:', error);
        alert(error)
      }
    }else{

      try {
         // Call the register method from UserService
         const token = localStorage.getItem('token');
          await UserService.register(myUsers, token);

          navigator('/accounts')
          setCity("");setEmail("");setPassword("");setRole("");setName("");
         
       
         alert('User registered successfully');
 
 
     } catch (error) {
         console.error('Error registering user:', error);
         alert('An error occurred while registering user');
     }
 
    }
        
    }

    const[email,setEmail]=useState("");
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[city,setCity]=useState("");
    const[role,setRole]=useState("");

    const pageTittle=()=>{

        if(userId){
        return  <h2 className='text-center'>Edit User Account</h2>
        }else{
            return  <h2 className='text-center'>Add User Account</h2>
        }
    }
    
    useEffect(()=>{
        fetchUserDataById(userId)
    },[userId])

  const fetchUserDataById = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await UserService.getUserById(userId, token); // Pass userId to getUserById
      setCity(response.ourUsers.city);
      setEmail(response.ourUsers.email);
      setName(response.ourUsers.name);
      setPassword('');
      setRole(response.ourUsers.role);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

    return (
      <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
        <Container ><br/><br/>
        <div className='container'>
        <div className='row'>
         <div className='card col-md-6 offset-md-3 offset-md-3 card-header' >
         {pageTittle()}
          <div className='card-body'>
           <Form onSubmit={saveOrUpdateUser} > 
            <div className='form-group mb-2'> 
           <Row className="mb-3">
           <Form.Group as={Col} controlId="formGrideEmail">
          <Form.Label className='fs-5'>Email Address</Form.Label>
          <Form.Control 
          type='email' 
          required
          placeholder="Email Address" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          name='email' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridusername">
          <Form.Label className='fs-5'>Username</Form.Label>
          <Form.Control 
          required
          type='text' 
          placeholder="Username" 
          value={name} 
          onChange={(e)=>setName(e.target.value)}
           name='name'/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>

          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className='fs-5'>Password</Form.Label>
          <Form.Control  
          required
          type='password' 
          placeholder="Password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          name='password'/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className='fs-5'>City</Form.Label>
          <Form.Control  
          required
          type='text' 
          placeholder="City" 
          value={city} 
          onChange={(e)=>setCity(e.target.value)} 
          name='city'/>
          </Form.Group>
          </Row>

          {(data==='ADMIN') && (
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridRole">
          <Form.Label className='fs-5'>Role</Form.Label>
          <Form.Select 
          required
          onChange={(e)=>setRole(e.target.value)} 
          value={role} size='lg' name='role'  >
          <option value=''>Select Role</option>
           <option value="ADMIN">Admin</option>
           <option value="ACADEMIC">Academic</option>
           <option value="USER">User</option>
          </Form.Select>
          </Form.Group>
          </Row>


          )}
          
            </div>
            <Row > 
           <Col > <Button type='submit' className='btn btn-primary mb-2' size='lg'>Submit</Button></Col>
           <Col> <Button type='button' className='btn btn-danger' siz='lg'>Resert</Button></Col>
           </Row>
          </Form>
         
          </div>
         </div>
        </div>
         
        </div><br/>
       </Container>
       </div>
    );
};

export default Register;