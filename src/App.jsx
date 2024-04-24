
import Nav from './Home Page Component/Header Section/Nav';
import AnimatedCursor from '../src/Animated Cursor/AnimatedCursor'
import Project from './Projects/Project';
import React from 'react';
import Experience from './Experience/Experience';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main Page/Main';
import Gallery from './Gallery/Gallery';
import ScrollTop from './Scroll To Top/ScrollTop';
// import Preloader from '../src/Preloader/Preloader'

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor />
      {/* <Preloader/> */}
      <ScrollTop/>
      <Nav />
      <Routes>
        <Route path="/" element={<React.Fragment>
          <Main/>     
        </React.Fragment>} />
        <Route path="/project" element={<Project />} />
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/' element={<><App></App></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


