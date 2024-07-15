import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';
import UserService from '../service/userService';

const AddClass = () => {

    const[levelName,setLevelName]=useState("");

    const {levelId}=useParams();

    const navigator=useNavigate();

    console.log(levelId)

    const saveOrUpdateClass=async(e)=>{
        e.preventDefault()
        const myLevel={levelName}
        console.log(myLevel)

        if(levelId){

            try {
              const confirmUpdate = window.confirm('Are you sure you want to Update this user?');
              if (confirmUpdate) {
                const token = localStorage.getItem('token');
                 await UserService.updateLevel(levelId, myLevel, token);
                 navigator('/listLevels')
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
                await UserService.addLevel(myLevel, token);
                navigator('/listLevels')
                alert('User registered successfully');
       
       
           } catch (error) {
               console.error('Error registering user:', error);
               alert('An error occurred while registering user');
           }
       
          
        
        }
    
       
    }

    useEffect(()=>{
        fetchLevelById(levelId);
      },[levelId])
  
      const fetchLevelById = async (levelId) => {
          try {
            const token = localStorage.getItem('token');
            const response = await UserService.getLevelById(levelId, token); // Pass levelId to getUserById
            setLevelName(response.levelName)
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };

    const pageTittle=()=>{

        if(levelId){
          return  <h2 className='text-center'>Edit Class</h2>
        }else{
           return <h2 className='text-center'>Add Class</h2>
        }
    }

   
    

    return (
        <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
           <Container ><br/><br/><br/>
        <div className='container'>
        <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3 card-header' >
         {pageTittle()}
          <div className='card-body'>
           <Form onSubmit={saveOrUpdateClass} > 
            <div className='form-group mb-2'> 
           <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>Class</Form.Label>
          <Form.Control 
          type='text' 
          required
          placeholder="Enter Class Level" 
          value={levelName} 
          onChange={(e)=>setLevelName(e.target.value)} 
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

export default AddClass;