import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Gallery from './Page/Gallery';
import Instructors from './Page/Instructors';
import Courses from './Page/Courses';
import Blog from './Page/Blog';
import Scholarship from './Page/Scholarship';
import Franchise from './Page/Franchise';
import LoginForm from './Page/LoginForm';
import ApplyNow from './Page/ApplyNow';
import Contact from './Page/Contact';




const App = () => {
  
  return (
  
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/instructors' element={<Instructors/>} />
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/scholarship' element={<Scholarship/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/franchise' element={<Franchise/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/loginform' element={<LoginForm/>}/>
      <Route path='/applynow' element={<ApplyNow/>}/>
    
      

    </Routes>
    <Footer/>
    </BrowserRouter>


    
  )
}

export default App


