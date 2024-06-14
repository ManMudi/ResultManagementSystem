
import React, { useEffect, useState } from 'react';
import { listSubjectOrdinary } from '../service/subjectOrdinaryService';
import Container from 'react-bootstrap/Container';


const SubjectOrdinary = () => {

    const[subjects,setSubjects]=useState([])

    useEffect(()=>{
     listSubjectOrdinary().then(response=>{
        setSubjects(response.data)
     })
    })

    return (
        <Container  >
          <div style={{height:'556px',position:'relative', display:'inline-table',width:'100%'}}>
       <div className='container'>
        <h2 className='text-center'>List of Subject</h2>
        <button className='btn btn-primary mb-2' >Add Class</button>
        <table className='table table-striped-column table-bordered table-hover table-sm '> 
          <thead className='table-dark' align='center'>
            <tr>
              <th >Subject Code</th>
              <th>Subject Name</th>
              <th>Subject Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody align='center'>
           {
            subjects.map(subject=>
              <tr key={subject.id}>
               <td>{subject.id}</td>
               <td>{subject.subject}</td>
               <td>{subject.description}</td>
               <td align='center'><button className='btn btn-info btn-sm'>Update</button>
               <button className='btn btn-warning btn-sm' style={{marginLeft:'5px'}}>Delete</button>
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

export default SubjectOrdinary;