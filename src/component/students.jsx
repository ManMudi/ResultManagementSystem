
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate,useParams } from 'react-router-dom';
import UserService from '../service/userService';


const AddStudent = () => {
  
    const[firstName,setFirstName]=useState('');
    const[middleName,setMiddleName]=useState('');
    const[lastName,setLastName]=useState('');
    const[gender,setGender]=useState('');
    const[dateOfBirth,setDateOfBirth]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[levels,setLevels]=useState([]);
    const[levelId,setLevelId]=useState('');

    const navigator=useNavigate();
      
    const{studentId}=useParams();
    
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
      
    
    useEffect(()=>{
      fetchStudentById(studentId);
    },[studentId])

    const fetchStudentById = async (studentId) => {
        try {
          const token = localStorage.getItem('token');
          const response = await UserService.getStudentById(studentId, token); // Pass levelId to getUserById
          setFirstName(response.firstName);
          setMiddleName(response.middleName);
          setLastName(response.lastName);
          setGender(response.gender);
          setDateOfBirth(response.dateOfBirth);
          setPhoneNumber(response.phoneNumber);
          setLevelId(response.levelId);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };



    const saveOrUpdateStudent=async(e)=>{
      e.preventDefault()
      const student={firstName,middleName,lastName,gender,levelId,dateOfBirth,phoneNumber}
      console.log(student)

      if(studentId){

        try {
          const confirmUpdate = window.confirm('Are you sure you want to Update this Student ?');
          if (confirmUpdate) {
            const token = localStorage.getItem('token');
             await UserService.updateStudent(studentId, student, token);
             navigator('/listStudents')
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
            await UserService.addStudent(student, token);
            navigator('/listStudents')
            alert('User registered successfully');
   
   
       } catch (error) {
           console.error('Error registering user:', error);
           alert('An error occurred while registering user');
       }
   
      
    
    }
   
      }
    
    

    const resertStudent=()=>{
      setFirstName(''),setMiddleName(''),setLastName(''),setGender(''),setLevels(''),setDateOfBirth(''),setPhoneNumber('');
    }

  

 const pageTittle=()=>{
  if(studentId){
     return  <h2 className='text-center'>Edit Student</h2>
  }else{
    return  <h2 className='text-center'>Add New Student</h2>
  }
 }

 
    return (
        <Container ><br/>
        <div className='container'>
        <div className='row'>
         <div className='card col-md-6 offset-md-3 offset-md-3 card-header' >
           {pageTittle()}
          <div className='card-body'>
           <Form onSubmit={saveOrUpdateStudent} > 
            <div className='form-group mb-2'> 
           <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label className='fs-5'>First Name</Form.Label>
          <Form.Control 
          type='text' 
          required
          placeholder="First Name" 
          value={firstName} 
          onChange={(e)=>setFirstName(e.target.value)} 
          name='firstName' />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMiddleName">
          <Form.Label className='fs-5'>Middle Name</Form.Label>
          <Form.Control 
          required
          type='text' 
          placeholder="Middle Name" 
          value={middleName} 
          onChange={(e)=>setMiddleName(e.target.value)}
           name='middleName'/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>

          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label className='fs-5'>Last Name</Form.Label>
          <Form.Control  
          required
          type='text' 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e)=>setLastName(e.target.value)} 
          name='lastName'/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
          <Form.Label className='fs-5'>Gender</Form.Label>
          <Form.Select 
          required
          onChange={(e)=>setGender(e.target.value)} 
          value={gender} size='lg' name='gender'  >
          <option value=''>Select Gender</option>
           <option value="M">Male</option>
           <option value="F">Female</option>
          </Form.Select>
        </Form.Group>
          </Row>

          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridDoB">
          <Form.Label className='fs-5'>Date of Birth</Form.Label>
          <Form.Control 
          required
          type='date' 
          placeholder="Date of Birth" 
          value={dateOfBirth} 
          onChange={(e)=>setDateOfBirth(e.target.value)}size='lg' 
          name='dateOfBirth' />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridClass">
          <Form.Label className='fs-5'>Class</Form.Label>
          <Form.Select 
          required
          onChange={(e)=>setLevelId(e.target.value)} 
          value={levelId} size='lg' 
          name='level'  >
          <option value=''>Select Class</option>
            {
              levels.map(level=>
                <option key={level.id} value={level.id}>{level.levelName}</option>
              )
            }
          </Form.Select>
        </Form.Group>
          </Row>
          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label className='fs-5'>Phone Number</Form.Label>
          <Form.Control 
          required
          type='tel' 
          placeholder="Phone Number"
          value={phoneNumber} 
          onChange={(e)=>setPhoneNumber(e.target.value)} 
          name='phone' />
          </Form.Group>
          
          </Row>
            </div>
            <Row > 
           <Col > <Button type='submit' className='btn btn-primary mb-2' size='lg'>Submit</Button></Col>
           <Col> <Button type='button' className='btn btn-danger' siz='lg' onClick={resertStudent}>Resert</Button></Col>
           </Row>
          </Form>
         
          </div>
         </div>
        </div>
         
        </div><br/>
       </Container>
       
    );
};
   
export default AddStudent;