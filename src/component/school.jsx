import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../service/userService';

const AddSchool = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[address,setAddress]=useState("");
    const[id,setId]=useState("");
    const[phone,setPhone]=useState("");

    const {schoolId}=useParams();
    
    const navigator=useNavigate();

    const saveOrUpdateSchool=async(e)=>{
     e.preventDefault();
     
     const myschool={id,name,email,phone,address}
     console.log(myschool);

     if(schoolId){

        try {
          const confirmUpdate = window.confirm('Are you sure you want to Update this user?');
          if (confirmUpdate) {
            const token = localStorage.getItem('token');
             await UserService.updateSchool(schoolId, myschool, token);
             navigator('/listSchools')
            // Redirect to profile page or display a success message
           
          }
    
        } catch (error) {
          console.error('Error updating user profile:', error);
          alert(error)
        }
      }else{
  
        try {
           // Call the register method from UserService
           const token = localStorage.getItem('token');
            await UserService.addSchool(myschool, token);
            navigator('/listSchools')
            alert('User registered successfully');
   
   
       } catch (error) {
           console.error('Error registering user:', error);
           alert('An error occurred while registering user');
       }
    
    }
 
    }

    useEffect(()=>{
        fetchSchoolById(schoolId);
      },[schoolId])
  
      const fetchSchoolById = async (schoolId) => {
          try {
            const token = localStorage.getItem('token');
            const response = await UserService.getSchoolById(schoolId, token); // Pass levelId to getUserById
            setAddress(response.address)
            setEmail(response.email)
            setName(response.name)
            setPhone(response.phone)
            setId(response.id)
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };

    const pageTittle=()=>{
     
        if(schoolId){
            return  <h2 className='text-center'>Edit School</h2>
        }else{
            return  <h2 className='text-center'>Add School</h2>
        }
       
    }

    return (
        <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
           <Container ><br/><br/>
        <div className='container'>
        <div className='row'>
         <div className='card col-md-6 offset-md-3 offset-md-3 card-header'>
         {pageTittle()}
          <div className='card-body'>
           <Form onSubmit={saveOrUpdateSchool} > 
            <div className='form-group mb-2'> 
           <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>Registration Number</Form.Label>
          <Form.Control 
          type='text' 
          required
          placeholder="Enter School Registration Number" 
          value={id} 
          onChange={(e)=>setId(e.target.value)} 
          name='level' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>Full Name</Form.Label>
          <Form.Control 
          type='text' 
          required
          placeholder="Enter School Name" 
          value={name} 
          onChange={(e)=>setName(e.target.value)} 
          name='level' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          </Row>
          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>Email </Form.Label>
          <Form.Control 
          type='email' 
          required
          placeholder="Enter School Email" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          name='level' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>Address</Form.Label>
          <Form.Control 
          type='text' 
          required
          placeholder="Enter School Address" 
          value={address} 
          onChange={(e)=>setAddress(e.target.value)} 
          name='level' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>Phone Number</Form.Label>
          <Form.Control 
          type='text' 
          required
          placeholder="Enter School Phone" 
          value={phone} 
          onChange={(e)=>setPhone(e.target.value)} 
          name='level' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          
          </Row>
            </div>
            <Row > 
           <Col > <Button type='submit' className='btn btn-primary mb-2' size='lg' >Submit</Button></Col>
           <Col> <Button type='button' className='btn btn-danger' siz='lg' >Resert</Button></Col>
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

export default AddSchool;