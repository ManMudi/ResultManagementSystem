
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import AppHero from './components/main';
import About from './components/about';
import Service from './components/service';
import Work from './components/works';
import Team from './components/team';
import Testimonial from './components/testimonial';
import Pricing from './components/pricing';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';
import { Route, Routes, useLocation} from 'react-router-dom';
import AddStudent from './components/students';
import Levels from './list/listLevels';
import School from './list/listSchools';  
import MyLink from './list/listStudents';
import SubjectOrdinary from './list/listSubjectOrdinary';
import Sidebar from './components/sidebar';

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
  <Route path='/edit-student/:id' element={<AddStudent/>}></Route>
  </Routes>
  
    </main>
    <footer id="footer">
      <Footer />
    </footer>
    
  </div>
  

  )
}

export default App
