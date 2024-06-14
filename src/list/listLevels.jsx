import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import {listLevels} from '../service/LevelService';

const Levels = () => {

  const[levels,setLevels]=useState([])

  const Level=()=>{

  }

  useEffect(()=>{
    listLevels().then((response)=>{
      setLevels(response.data)
    }).catch(error=>{
      console.error(error)
    })
  })

 

  return (
    <div style={{height:'556px',position:'relative', display:'inline-table',width:'100%'}}>
      <Container  >
       <div className='container'>
        <h2 className='text-center'>List of Class</h2>
        <button className='btn btn-primary mb-2' onClick={Level}>Add Class</button>
        <table className='table table-striped-column table-bordered table-hover table-sm '> 
          <thead className='table-dark' align='center'>
            <tr>
              <th >Class Id</th>
              <th>Class Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody align='center'>
           {
            levels.map(level=>
              <tr key={level.id}>
               <td>{level.id}</td>
               <td>{level.levelName}</td>
               <td align='center'><button className='btn btn-info btn-sm'>Update</button>
               <button className='btn btn-warning btn-sm' style={{marginLeft:'5px'}}>Delete</button>
               </td>
              </tr>
            )
           }
          </tbody>
        </table>
       </div>
      </Container>
      </div>
  );
};

export default Levels;