import React, { useState } from 'react';
import './scss/style.scss';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import Sidebar from './components/main/sidebar';
import Profession from './components/profession/profession';
//import ReactDOM from "react-dom";
import { BrowserRouter, Route,  useLocation } from 'react-router-dom';
import Courses from './components/courses/courses';
import Projects from './components/projects/projects';
import Test from './components/test/test';
import { CoursesCardData, chengeCheckCoursesCardData } from './data/data';


const App = () => {
  //let location = useLocation();
  const [professionSelected, setProfessionSelected] = useState();
  const handleProfessionSelected = (a) => {
    setProfessionSelected(a);
  }
//console.log(location.pathname)
  return (
    <BrowserRouter>
    <>
      <Header professionSelected={professionSelected}/>
      <Sidebar />
      <Route exact path="/" component={Main}/>
      <Route 
        path="/profession"
        render={(props) => <Profession 
          professionSelected={professionSelected} 
          handleProfessionSelected={handleProfessionSelected}
        />}
      />
      <Route
        path="/courses"
        render={(props) => <Courses 
          professionSelected={professionSelected}
          CoursesCardData={CoursesCardData}
          chengeCheckCoursesCardData={chengeCheckCoursesCardData}
        />}
      />
      <Route path="/projects" component={Projects}/>
      <Route path="/test" component={Test}/>
      <Footer />
    </>
    </BrowserRouter>
  );
}

export default App;