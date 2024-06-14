
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { createStudent, getStudent, updateStudent } from '../service/StudentService';
import { useNavigate,useParams } from 'react-router-dom';
import { listLevels } from '../service/LevelService';


const AddStudent = () => {
  

    const[firstName,setFirstName]=useState('');
    const[middleName,setMiddleName]=useState('');
    const[lastName,setLastName]=useState('');
    const[gender,setGender]=useState('');
    const[dateOfBirth,setDateOfBirth]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[levels,setLevels]=useState([]);
    const[levelId,setLevelId]=useState('');


    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

    }
   
    setValidated(true);
 
  };
   
    const navigator=useNavigate();
      
    const{id}=useParams();
    
    useEffect(()=>{
      listLevels().then((response)=>{
        setLevels(response.data)
      }).catch(error=>{
        console.log(error)
      })
      })

      
    useEffect(()=>{
      if(id){
          getStudent(id).then((response)=>{
          setFirstName(response.data.firstName);
          setMiddleName(response.data.middleName);
          setLastName(response.data.lastName);
          setGender(response.data.gender);
          setDateOfBirth(response.data.dateOfBirth);
          setPhoneNumber(response.data.phoneNumber);
          setLevelId(response.data.levelId);
        })
      }
    },[id])

    const handleFirstname=(e)=>{
    setFirstName(e.target.value)
    }

    const handleMiddlename=(e)=>{
      setMiddleName(e.target.value)
      }
    const handleLastname=(e)=>{
     setLastName(e.target.value)
     }
    const handleGender=(e)=>{
    setGender(e.target.value)
    } 
    const handleDOB=(e)=>{
    setDateOfBirth(e.target.value)
    }
    const handlePhone=(e)=>{
    setPhoneNumber(e.target.value)
    }


    const saveOrUpdateStudent=(e)=>{
      e.preventDefault()
      const student={firstName,middleName,lastName,gender,levelId,dateOfBirth,phoneNumber}
      console.log(student)

      if(id){
      updateStudent(id,student).then((response)=>{
        console.log(response.data);
        navigator('/listStudents')
      }).catch(error=>{
        console.error(error)
      })
      }else{
        createStudent(student).then((response)=>{
          console.log(response.data)
          navigator('/listStudents')
        }).catch(error=>{
          console.error(error)
        })
      }
    
    
    }

    const resertStudent=()=>{
      setFirstName(''),setMiddleName(''),setLastName(''),setGender(''),setLevels(''),setDateOfBirth(''),setPhoneNumber('');
    }

  

 const pageTittle=()=>{
  if(id){
     return  <h2 className='text-center'>Edit Student</h2>
  }else{
    return  <h2 className='text-center'>Add New Student</h2>
  }
 }
    return (
        <Container ><br/>
        <div className='container'>
        <div className='row' padding='10px'>
         <div className='card col-md-6 offset-md-3 offset-md-3'>
           {pageTittle()}
          <div className='card-body'>
           <Form noValidate validated={validated} onSubmit={saveOrUpdateStudent}> 
            <div className='form-group mb-2'> 
           <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridfirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type='text' placeholder="First Name" value={firstName} onChange={handleFirstname} name='firstName' required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control type='text' placeholder="Middle Name" value={middleName} onChange={handleMiddlename} name='middleName' required/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>

          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control  type='text' placeholder="Last Name" value={lastName} onChange={handleLastname} name='lastName' required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGender">
          <Form.Label>Gender</Form.Label>
          <Form.Select onChange={handleGender} value={gender} size='lg' name='gender' required >
          <option value=''>Select Gender</option>
           <option value="MALE">Male</option>
           <option value="FEMALE">Female</option>
          </Form.Select>
        </Form.Group>
          </Row>

          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridDoB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type='date' placeholder="Date of Birth" value={dateOfBirth} onChange={handleDOB}size='lg' name='dateOfBirth' required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridClass">
          <Form.Label>Class</Form.Label>
          <Form.Select onChange={(e)=>setLevelId(e.target.value)} value={levelId} size='lg' name='level' required >
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
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type='tel' placeholder="Phone Number" value={phoneNumber} onChange={handlePhone} name='phone' required/>
          </Form.Group>
          
          </Row>
            </div>
            <Row > 
           <Col > <Button type='submit' className='btn btn-primary mb-2' onClick={handleSubmit} size='lg'>Submit</Button></Col>
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