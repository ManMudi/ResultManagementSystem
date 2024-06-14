
import React, { useEffect, useState } from 'react';
import { listSchools } from '../service/SchoolService';
import Container from 'react-bootstrap/Container';

const School = () => {

    const[schools,setSchools]=useState([]);

 useEffect(()=>{
    listSchools().then(response=>{
        setSchools(response.data)
    }).catch(error=>{
        console.error(error)
    })
 },[])

    return (
        <Container  >
          <div style={{height:'556px',position:'relative', display:'inline-table',width:'100%'}}>
       <div className='container'>
        <h2 className='text-center'>List of School</h2>
        <button className='btn btn-primary mb-2' >Add School</button>
        <table className='table table-striped-column table-bordered table-hover table-sm '> 
          <thead className='table-dark' align='center'>
            <tr>
              <th >School Id</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody align='center'>
           {
            schools.map(school=>
              <tr key={school.id}>
               <td>{school.id}</td>
               <td>{school.name}</td>
               <td>{school.address}</td>
               <td>{school.email}</td>
               <td>{school.phone}</td>
               <td align='center'><button className='btn btn-info btn-sm'>Update</button>
               <button className='btn btn-warning btn-sm' style={{marginLeft:'5px'}} >Delete</button>
               </td>
              </tr>
            )
           }
          </tbody>
        </table>
       </div>
       </div>
      </Container>
    );
};

export default School;