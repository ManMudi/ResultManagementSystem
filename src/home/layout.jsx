
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({children}) => {

    const location=useLocation()

    const[navBar,setNavBar]=useState(false);

    useEffect(()=>{
     console.log(location)
     if(location.pathname==='/listStudents' || location.pathname==='/admin/add-student' ||
         location.pathname==='/admin/level' || location.pathname==='/admin/user' || location.pathname==='/admin/school'
         || location.pathname==='/admin/subject/ordinary' || location.pathname==='/admin/edit-student/:id'){
        setNavBar(false)
       }else{
       setNavBar(true)
       }
    },[location])

  

    return (
        <div>{navBar && children}</div>
    );
};

export default Layout;