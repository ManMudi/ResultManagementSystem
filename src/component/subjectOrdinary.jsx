import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { createSubjectOrdinary, getSubjectOrdinary, updateSubjectOrdinary } from '../service/subjectOrdinaryService';
import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../service/userService';

const AddSubject = () => {

    const[subject,setSubject]=useState("");

    const[description,setDescription]=useState("");

    const[id,setId]=useState("");

    const navigator=useNavigate();

    const {subjectId}=useParams();

    useEffect(()=>{
        fetchSubjectById(subjectId);
      },[subjectId])
  
      const fetchSubjectById = async (subjectId) => {
          try {
            const token = localStorage.getItem('token');
            const response = await UserService.getSubjectOrdinaryById(subjectId, token); // Pass levelId to getUserById
            setId(response.id);
            setSubject(response.subject);
            setDescription(response.description);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };

    const pageTittle=()=>{
        console.log(subjectId)
        if(subjectId){
            return  <h2 className='text-center'>Edit Subject</h2>
        }else{
            return  <h2 className='text-center'>Add Subject</h2>
        }
    }

    const saveOrUpdateClass=async(e)=>{
    e.preventDefault();

    const mySubject={id,subject,description};

    if(subjectId){

        try {
          const confirmUpdate = window.confirm('Are you sure you want to Update this user?');
          if (confirmUpdate) {
            const token = localStorage.getItem('token');
             await UserService.updateSubjectOrdinary(subjectId, mySubject, token);
             navigator('/subject/ordinary')
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
            await UserService.addSubjectOrdinary(mySubject, token);
            navigator('/subject/ordinary')
            alert('User registered successfully');
   
   
       } catch (error) {
           console.error('Error registering user:', error);
           alert('An error occurred while registering user');
       }
   
      
    
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
           <Form onSubmit={saveOrUpdateClass} > 
            <div className='form-group mb-2'> 
           <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>Code</Form.Label>
          <Form.Control 
          type='text' 
          required
          placeholder="Enter Subject Code" 
          value={id} 
          onChange={(e)=>setId(e.target.value)} 
          name='level' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>Name</Form.Label>
          <Form.Control 
          type='text' 
          required
          placeholder="Enter Subject Name" 
          value={subject} 
          onChange={(e)=>setSubject(e.target.value)} 
          name='level' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>Description</Form.Label>
          <Form.Control 
          type='text' 
          required
          placeholder="Enter Subject Description" 
          value={description} 
          onChange={(e)=>setDescription(e.target.value)} 
          name='level' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          
          </Row>
            </div>
            <Row > 
           <Col > <Button type='submit' className='btn btn-primary mb-2' size='lg'>Submit</Button></Col>
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

export default AddSubject;