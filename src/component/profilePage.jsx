import { useState, useEffect } from 'react';
import UserService from '../service/userService';
import { useNavigate } from 'react-router-dom';
import iki from '../assets/images/iki.png'
import Container from 'react-bootstrap/Container';
import '../index.css'


const ProfilePage=()=>{

    const [profileInfo, setProfileInfo] = useState({});
    
    const navigator=useNavigate()

    const handleSubmit=()=>{

      navigator(`/edit-user/${profileInfo.id}`, { state: profileInfo.role });
    }

    useEffect(() => {
        fetchProfileInfo()
    }, []);

    const fetchProfileInfo = async () => {
        try {

            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.ourUsers);

        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    return (
      <div style={{height:'515px',position:'relative', display:'inline-table',width:'100%'}}>
           <Container ><br/>
        <div className='container'>
        <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3 card-header' >
         <h2 className='text-center'>User Profile</h2>
          <div className='card-body'>
          <img className='image' src={iki} alt='profile picture' width='100px' height='50px'></img>
          <br/><br/>
          <p >Full name: {profileInfo.name}</p>
          <p>Email address: {profileInfo.email}</p>
          <p>City: {profileInfo.city}</p>
          <p>Role: {profileInfo.role}</p>
          <button className='btn btn-primary' onClick={handleSubmit}>Edit User Profile</button>
          </div>
         </div>
        </div>
         
        </div><br/>
       </Container>
        </div>
    );
}

export default ProfilePage;
