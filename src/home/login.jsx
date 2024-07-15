import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import UserService from '../service/userService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const userData = await UserService.login(email, password)
        console.log(userData)
        if (userData.token) {
            localStorage.setItem('token', userData.token)
            localStorage.setItem('role', userData.role)
            localStorage.setItem('name', userData.name)

            userData.role==='ADMIN' ? navigate('/accounts'): navigate('/profile-page')
      
        }else{
            setError(userData.message)
        }
        
    } catch (error) {
        console.log(error)
        setError(error.message)
        setTimeout(()=>{
            setError('');
        }, 5000);
    }
}

  
    return (

         
         
        <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
           <Container ><br/><br/><br/>
        <div className='container'>
        <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3 card-header' >
         <h2 className='text-center'>Login</h2>
         {error && <p style={{color:"red"}}  className="error-message ">{error}</p>}
          <div className='card-body'>
           <Form onSubmit ={handleSubmit}> 
            <div className='form-group mb-2'> 
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={5} className='fs-4'>Email Address </Form.Label>
            <Col sm={7}>
           <Form.Control type="email" placeholder="Username" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </Col>
           </Form.Group>
           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Form.Label column sm={5} className='fs-4' >Password </Form.Label>
            <Col sm={7}>
           <Form.Control type="Password" placeholder="Password" size='lg' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </Col>
           </Form.Group>

            </div>
            <Row > 
           <Col > <Button type='submit' className='btn btn-primary mb-2' size='lg'>Submit</Button></Col>
         
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

export default Login;