
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './home/header';
import AppHero from './home/main';
import About from './home/about';
import Service from './home/service';
import Work from './home/works';
import Team from './home/team';
import Testimonial from './home/testimonial';
import Pricing from './home/pricing';
import Blog from './home/blog';
import Contact from './home/contact';
import Footer from './home/footer';
import { Route, Routes, useLocation} from 'react-router-dom';
import AddStudent from './component/students';
import Levels from './list/listLevels';
import School from './list/listSchools';  
import MyLink from './list/listStudents';
import SubjectOrdinary from './list/listSubjectOrdinary';
import Sidebar from './home/sidebar';
import AddClass from './component/level';
import AddSchool from './component/school';
import AddSubject from './component/subjectOrdinary';
import Login from './home/login';
import Register from './component/register';
import ListUsers from './list/listUsers';
import ProfilePage from './component/profilePage';

const App=()=> {

  const location=useLocation()

  let navBar;

  if(location.pathname==='/main' || location.pathname==='/about' || location.pathname==='/service' ||
     location.pathname==='/work' || location.pathname==='/team' || location.pathname==='/testimonial'
     || location.pathname==='/pricing' || location.pathname==='/blog' || location.pathname==='/contact' 
     || location.pathname==='/' ){

      navBar=<Header/>
  }else{
    navBar=<Sidebar/>
  }
  return(
    <div className="App">
      {navBar}
    <main>
<Routes>
  <Route path='/' element={<AppHero/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/service' element={<Service/>}></Route>
  <Route path='/pricing' element={<Pricing/>}></Route>
  <Route path='/team' element={<Team/>}></Route>
  <Route path='/testimonial' element={<Testimonial/>}></Route>
  <Route path='/work' element={<Work/>}></Route>
  <Route path='/add-student' element={<AddStudent/>}></Route>
  <Route path='/listLevels' element={<Levels/>}></Route>
  <Route path='/listStudents' element={<MyLink/>}></Route>
  <Route path='/listSchools' element={<School/>}></Route>
  <Route path='/subject/ordinary' element={<SubjectOrdinary/>}></Route>
  <Route path='/edit-student/:studentId' element={<AddStudent/>}></Route>
  <Route path='/add-class' element={<AddClass/>}></Route>
  <Route path='/add-school' element={<AddSchool/>}></Route>
  <Route path='/add-subject' element={<AddSubject/>}></Route>
  <Route path='/edit-class/:levelId' element={<AddClass/>}></Route>
  <Route path='/edit-school/:schoolId' element={<AddSchool/>}></Route>
  <Route path='/edit-subject/:subjectId' element={<AddSubject/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/accounts' element={<ListUsers/>}></Route>
  <Route path='/edit-user/:userId' element={<Register/>}></Route>
  <Route path='/profile-page' element={<ProfilePage/>}></Route>
  </Routes>
  
    </main>
    <footer id="footer">
      <Footer />
    </footer>
    
  </div>
  

  )
}

export default App
